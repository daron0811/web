

const _settings = {
  threshold: 0.9, // detection sensitivity, between 0 and 1

  // to get this parameters, open /dev/models3D/handWithPlaceholders.blend
  // and look the pose of CubePalm mesh
  // The real position of the dinosaur compared to the hand is implemented in this Blender file:
  // /dev/models3D/handWithObjectManipDinosaur.blend
  scale: 2.6,
  translation: [0, -6.73, -1.68],
  quaternion: [0.993, 0, 0, 0.11], // X,Y,Z,W

  // debug flags:
  debugCube: false, // Add a cube
  debugDisplayLandmarks: false,
  debugWholeHand: false
};


const _three = {
  loadingManager: null,
  tracker: null
};

const _states = {
  notLoaded: -1,
  loading: 0,
  running: 1,
  busy: 2
};
let _state = _states.notLoaded;
let _isSelfieCam = false;
let _animationMixer = null, _clock = null;

let _isShowText = false;
let _isDetected = false;
let trackObj = null;
let webcamDeviceIndex = 0;

function setFullScreen(cv) {
  cv.width = window.innerWidth;
  cv.height = window.innerHeight;
}

// function setFullScreen(cv, videoAspect = 4/3) {
//   const windowAspect = window.innerWidth / window.innerHeight;

//   if (windowAspect > videoAspect) {
//     // 螢幕太寬，高度為基準
//     cv.height = window.innerHeight;
//     cv.width = window.innerHeight * videoAspect;
//   } else {
//     // 螢幕太高，寬度為基準
//     cv.width = window.innerWidth;
//     cv.height = window.innerWidth / videoAspect;
//   }

//   // 居中顯示
//   cv.style.position = 'absolute';
//   cv.style.left = `${(window.innerWidth - cv.width) / 2}px`;
//   cv.style.top = `${(window.innerHeight - cv.height) / 2}px`;
// }

function playIntroSequence(onComplete) {
  const text1 = document.getElementById('introText1');
  const text2 = document.getElementById('introText2');

  // 顯示第一行
  setTimeout(() => {
    text1.classList.add('show');

    // 顯示第二行
    setTimeout(() => {
      text2.classList.add('show');

      // 等第二行顯示完再開始 hand tracking
      setTimeout(() => {
        onComplete();
      }, 1000); // 等待第二行文字顯示動畫完成
    }, 2000); // 第二行出現延遲（第一行顯示後）
  }, 500); // 預留一點初始時間
}

function switchDevice() {
  var devices = [];
  WEBARROCKSHAND.get_videoDevices(
    function (vd) {
      devices = vd;

      if (devices == null) {
        stopDevice();
        return;
      }

      if (devices.length == 0) {
        stopDevice();
        return;
      }

      webcamDeviceIndex++;
      if (webcamDeviceIndex >= devices.length) {
        webcamDeviceIndex = 0;
      }

      videoSettings.deviceId = devices[webcamDeviceIndex].deviceId;
      WEBARROCKSHAND.update_videoSettings(videoSettings);
      console.log("Device ID : ", webcamDeviceIndex, " ", devices[webcamDeviceIndex]);
    }
  );
}

// entry point:
function main() {
  _state = _states.loading;

  const handTrackerCanvas = document.getElementById('handTrackerCanvas');
  const VTOCanvas = document.getElementById('ARCanvas');

  setFullScreen(handTrackerCanvas);
  setFullScreen(VTOCanvas);

  //新增視窗縮放時自動調整 canvas 尺寸
  // window.addEventListener('resize', () => {
  //   console.log('INFO in main.js: Window resized, adjusting canvas size');
  //   setFullScreen(handTrackerCanvas);
  //   setFullScreen(VTOCanvas);
  // });

  HandTrackerThreeHelper.init({
    poseLandmarksLabels: [
      /*'palmBaseThumb', 'palmSideIndex', 'palmIndexMiddle', 'palmMiddleRing', 'palmRingPinky', 'palmSidePinky',
      'palmWrist', 'palmMiddle', 'palmSide',
      'backMiddle', 'backWrist', 'backTop'*/
      'backMiddle',/*'backWrist',*/ 'palmBaseThumb', 'palmSideIndex', /*'palmIndexMiddle',*/ 'palmMiddleRing', 'palmRingPinky', 'palmSidePinky',
      /*'palmWrist',*/ 'palmMiddle', 'palmSide',
      'backTop'
    ],
    videoSettings: {
      'deviceId': '',             // not set by default
      'facingMode': 'environment'
    },
    poseFilter: PoseFlipFilter.instance({}),
    enableFlipObject: false,
    cameraZoom: 1,
    threshold: _settings.threshold,
    VTOCanvas: VTOCanvas,
    handTrackerCanvas: handTrackerCanvas,
    debugDisplayLandmarks: _settings.debugDisplayLandmarks,
    NNsPaths: ['../../neuralNets/NN_OBJMANIP_7.json'],
    stabilizationSettings: {
      NNSwitchMask: {
        isRightHand: false
      }
    },
    callbackTrack: callbackTrack
  }).then(start).catch(function (err) {
    console.log('INFO in main.js: an error happens ', err);
  });

  document.getElementById('captureBtn').addEventListener('click', () => {
    const baseCanvas = document.getElementById('handTrackerCanvas');
    const arCanvas = document.getElementById('ARCanvas');
    const snapshotContainer = document.getElementById('snapshotContainer');
    snapshotContainer.style.opacity = '1';
    // 建立暫存 canvas
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = baseCanvas.width;
    tempCanvas.height = baseCanvas.height;
    const ctx = tempCanvas.getContext('2d');

    // 👉 加入鏡射反轉
    ctx.save(); // 儲存原本狀態
    ctx.translate(tempCanvas.width, 0); // 移動到右邊
    ctx.scale(-1, 1); // 水平翻轉

    // 先畫手勢追蹤的 canvas（背景）
    ctx.drawImage(baseCanvas, 0, 0);

    // 再畫上 ARCanvas 的畫面
    ctx.drawImage(arCanvas, 0, 0);

    ctx.restore(); // 還原座標系

    // 匯出圖片
    const dataURL = tempCanvas.toDataURL('image/png');

    // 顯示預覽
    const img = new Image();
    img.src = dataURL;
    snapshotContainer.innerHTML = '';
    snapshotContainer.appendChild(img);
  });

  document.getElementById('switchCamBtn').addEventListener('click', () => {
    flip_camera();
  });

}

function fadeInMaterial(material, duration = 1000) {
  const start = performance.now();
  function animate(time) {
    const elapsed = time - start;
    const t = Math.min(elapsed / duration, 1);
    material.opacity = t;
    if (t < 1) requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

function fadeInElement(el, delay = 0, addFloat = false) {
  setTimeout(() => {
    el.classList.add('visible');
    if (addFloat) {
      el.classList.add('floating');
    }
  }, delay);
}

function fadeOutMaterial(material, duration = 1000) {
  const start = performance.now();
  function animate(time) {
    const elapsed = time - start;
    const t = Math.min(elapsed / duration, 1);
    material.opacity = 1 - t;
    if (t < 1) requestAnimationFrame(animate);
    else material.visible = false;
  }
  requestAnimationFrame(animate);
}

function callbackTrack(detectStatesArg) {
  // console.log('INFO in main.js: callbackTrack called with', detectStatesArg);
  if (_animationMixer) {
    _animationMixer.update(_clock.getDelta() * 0.5);
  }
  if (_isShowText == false) {
    playIntroSequence(() => {
      if (_isShowText == true) {
        return;
      }
      _isShowText = true;
      _state = _states.running;
    });
  }
  else {
    if (detectStatesArg.isDetected && _isShowText == true) {
      // if (!trackObj.visible) {
      //   trackObj.visible = true;
      //   fadeInMaterial(trackObj.material, 1000);

      //   // fadeInElement(document.getElementById('img1'), 1000, true); // 淡入後浮動
      //   fadeInElement(document.getElementById('img2'), 2000, true); // 再淡入＋浮動
      // }

      if (!_three.introPlane.visible && _isShowText) {
        if (_isDetected == false) {

          _isDetected = true;
          _three.introPlane.visible = true;
          _three.introMaterial.opacity = 0;

          fadeInMaterial(_three.introMaterial, 1000); // 淡入 intro plane

          // 1 秒後淡出 intro、淡入主圖
          setTimeout(() => {
            fadeOutMaterial(_three.introMaterial, 3000);

            setTimeout(() => {
              _three.introPlane2.visible = true;
              _three.introMaterial2.opacity = 0;
              fadeInMaterial(_three.introMaterial2, 500); // 淡入 intro plane
              setTimeout(() => {
                fadeOutMaterial(_three.introMaterial2, 500);
                trackObj.visible = true;
                trackObj.material.opacity = 0;
                fadeInMaterial(trackObj.material, 1000);
              }, 500);
            }, 500);

          }, 1000);
        }
      }
      else {
        trackObj.visible = true;
      }

    }
    else { trackObj.visible = false; }
  }

}


function start(three) {
  _isShowText = false;
  three.loadingManager.onLoad = function () {
    console.log('INFO in main.js: Everything is loaded');
    _state = _states.running;
  }

  // set tonemapping:
  three.renderer.toneMapping = THREE.ACESFilmicToneMapping;
  three.renderer.outputEncoding = THREE.sRGBEncoding;

  // set lighting:
  const pointLight = new THREE.PointLight(0xffffff, 2);
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  three.scene.add(pointLight, ambientLight);

  // init the tracker, i.e. the object stuck at the palm of the hand:
  _three.tracker = new THREE.Object3D();

  // add a debug cube:
  if (_settings.debugCube) {
    const s = 2;
    const cubeGeom = new THREE.BoxGeometry(s, s, s);
    // Move origin from center of the cube to the center of the Y = -1 face:
    const cubeMoveMatrix = new THREE.Matrix4().makeTranslation(0, 1, 0);
    cubeGeom.applyMatrix(cubeMoveMatrix);
    _three.tracker.add(
      new THREE.Mesh(cubeGeom,
        new THREE.MeshNormalMaterial())
    );
  }

  const textureLoader = new THREE.TextureLoader(three.loadingManager);
  textureLoader.load('imgs/3.png', function (texture) {
    const planeWidth = 1.5;
    const planeHeight = 1.5;

    const planeGeometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
    const planeMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      depthWrite: false,
      opacity: 0 // 預設為透明
    });

    const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    planeMesh.renderOrder = 999; // 保證在上層顯示
    planeMesh.frustumCulled = false;

    trackObj = planeMesh;

    trackObj.scale.set(8, 10, 1);
    trackObj.rotation.set(30, 0, 0);
    trackObj.position.set(3, 0, -5);
    trackObj.visible = false;

    _three.tracker.add(planeMesh);

    // 將 tracker 加入到 hand tracking 中
    HandTrackerThreeHelper.add_threeObject(_three.tracker);
  });

  // 第1個 plane
  textureLoader.load('imgs/1.png', function (texture2) {
    const planeWidth = 1.5;
    const planeHeight = 1.5;

    const introGeometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
    const introMaterial = new THREE.MeshBasicMaterial({
      map: texture2,
      transparent: true,
      opacity: 0 // 預設隱藏
    });

    const introPlane = new THREE.Mesh(introGeometry, introMaterial);
    introPlane.renderOrder = 998;
    introPlane.frustumCulled = false;

    introPlane.scale.set(8, 10, 1);
    introPlane.rotation.set(30, 0, 0);
    introPlane.position.set(3, 0, -5);
    introPlane.visible = false;

    _three.tracker.add(introPlane);

    // 存起來讓 callback 可以控制
    _three.introPlane = introPlane;
    _three.introMaterial = introMaterial;
  });

  // 第2個 plane
  textureLoader.load('imgs/2.png', function (texture2) {
    const planeWidth = 1.5;
    const planeHeight = 1.5;

    const introGeometry2 = new THREE.PlaneGeometry(planeWidth, planeHeight);
    const introMaterial2 = new THREE.MeshBasicMaterial({
      map: texture2,
      transparent: true,
      opacity: 0 // 預設隱藏
    });

    const introPlane2 = new THREE.Mesh(introGeometry2, introMaterial2);
    introPlane2.renderOrder = 998;
    introPlane2.frustumCulled = false;

    introPlane2.scale.set(8, 10, 1);
    introPlane2.rotation.set(30, 0, 0);
    introPlane2.position.set(3, 0, -5);
    introPlane2.visible = false;

    _three.tracker.add(introPlane2);

    // 存起來讓 callback 可以控制
    _three.introPlane2 = introPlane2;
    _three.introMaterial2 = introMaterial2;
  });

  // load the velociraptor 3D model:
  // new THREE.GLTFLoader(three.loadingManager).load('assets/velociraptor.glb', function (gltf) {
  //   const animatedObjectContainer = new THREE.Object3D();
  //   const animatedObject = gltf.scene;
  //   animatedObjectContainer.add(animatedObject);
  //   animatedObjectContainer.scale.multiplyScalar(2.5);
  //   _three.tracker.add(animatedObjectContainer);

  //   trackObj = _three.tracker;
  //   trackObj.visible = false;
  //   // add to the tracker:
  //   HandTrackerThreeHelper.add_threeObject(_three.tracker);

  //   // animate:
  //   const animationClip = gltf.animations[0];
  //   _animationMixer = new THREE.AnimationMixer(animatedObject);
  //   _clock = new THREE.Clock();
  //   const animationAction = _animationMixer.clipAction(animationClip);
  //   animationAction.play();
  // });




  // tweak position, scale and rotation:
  _three.tracker.scale.multiplyScalar(_settings.scale);
  const d = _settings.translation;
  const displacement = new THREE.Vector3(d[0], d[2], -d[1]); // inverse Y and Z
  _three.tracker.position.add(displacement);
  const q = _settings.quaternion;
  _three.tracker.quaternion.set(q[0], q[2], -q[1], q[3]);


  if (_settings.debugWholeHand) {
    new THREE.GLTFLoader(three.loadingManager).load('assets/debug/debugHand.glb', function (model) {
      const debugHandModel = model.scene.children[0];
      debugHandModel.traverse(function (threeStuff) {
        if (threeStuff.material) {
          threeStuff.material = new THREE.MeshNormalMaterial();
        }
      })
      HandTrackerThreeHelper.add_threeObject(debugHandModel);
    });
  }
} //end start()


function flip_camera() {
  if (_state !== _states.running) {
    return;
  }
  _state = _states.busy;
  WEBARROCKSHAND.update_videoSettings({
    facingMode: (_isSelfieCam) ? 'environment' : 'user'
  }).then(function () {
    _isSelfieCam = !_isSelfieCam;
    _state = _states.running;
    // mirror canvas using CSS in selfie cam mode:
    document.getElementById('canvases').style.transform = (_isSelfieCam) ? 'rotateY(180deg)' : '';
    console.log('INFO in main.js: Camera flipped successfully');
  }).catch(function (err) {
    console.log('ERROR in main.js: Cannot flip camera -', err);
  });
}


window.addEventListener('load', main);