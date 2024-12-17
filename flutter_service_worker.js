'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "de27f912e40a372c22a069c1c7244d9b",
"canvaskit/canvaskit.js.symbols": "ff204c6b77c9e5969d85d9bfbaa0c843",
"canvaskit/canvaskit.wasm": "2e9895626fe95683569ed951214f1eb8",
"canvaskit/chromium/canvaskit.js": "73343b0c5d471d1114d7f02e06c1fdb2",
"canvaskit/chromium/canvaskit.js.symbols": "85275e659470daa080e014ffe17a1a59",
"canvaskit/chromium/canvaskit.wasm": "86233631b867ce8f74c2020077650d11",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "c7cf698f802bc5e9e8e791f762ebdfe9",
"canvaskit/skwasm.wasm": "c528f7ba97a317e25e547ea47c8a66d8",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "a564f5dfbd90292f0f45611470170fe1",
"canvaskit/skwasm_st.wasm": "3179a61ea4768a679dbbe30750d75214",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "68c59d874a8394089dda617d21701267",
"index.html": "8d8c33247d7392bce8879f8fd072ca22",
"/": "8d8c33247d7392bce8879f8fd072ca22",
"main.dart.js": "3ad55c0d6d52f1ca9c5ed9013bd7c990",
"version.json": "9ae7ecbaa50e9346fa9c670df7deba32",
"assets/assets/images/pertemuan4/modul_Page1.png": "3f2e23f00a2d4eb63c994096eb27da30",
"assets/assets/images/pertemuan4/modul_Page2.png": "91c34c1a741443a38badd584e48b75e9",
"assets/assets/images/pertemuan4/modul_Page3.png": "a8613464eb2996b91097a280a5ad9f70",
"assets/assets/images/pertemuan4/modul_Page4.png": "bbfa8ad743605afbf425035ac1fdd880",
"assets/assets/images/pertemuan4/modul_Page5.png": "1b196ee2721d9a278e30e5ea01b742e9",
"assets/assets/images/pertemuan4/modul_Page6.png": "e2f777e61c340ac4ed94fea0221cc2d2",
"assets/assets/images/pertemuan4/modul_Page7.png": "6545627749d0a66f54ac40716ada7c65",
"assets/assets/images/pertemuan4/modul_Page8.png": "066d05ec8b592c07600e128dcbe7f4d1",
"assets/assets/images/pertemuan4/modul_Page9.png": "9f41a77fa5ff9aec118065d1564010c4",
"assets/assets/images/pertemuan4/modul_Page10.png": "f358c4123f6d3197aadec3b0a1dd0c71",
"assets/assets/images/pertemuan4/modul_Page11.png": "07b455ee1b6689c42bf2ce736f247446",
"assets/assets/images/pertemuan4/modul_Page13.png": "fc5310be5534769adad6db4ea4cbd0aa",
"assets/assets/images/pertemuan4/modul_Page12.png": "55e89d23ce1393894ee4c4fea3d8a382",
"assets/assets/images/pertemuan4/modul_Page15.png": "21a55da5b0efbca1b0f0d74e7d4eaebf",
"assets/assets/images/pertemuan4/modul_Page18.png": "57358d91c8764260341c4d5d1f0b7fd9",
"assets/assets/images/pertemuan4/modul_Page17.png": "fa4b8c56802e89ef0d847378e9f832dc",
"assets/assets/images/pertemuan4/modul_Page14.png": "7b3351fb796a4d605129191508ba6d81",
"assets/assets/images/pertemuan4/modul_Page16.png": "dc674b9d2832e206c759cd06cc0a5bf0",
"assets/assets/images/pertemuan4/modul_Page19.png": "4a37f73d4ea14aa0de7069268cba9e24",
"assets/assets/images/pertemuan4/modul_Page20.png": "54c804e7ca9d270e0f8fec672269e75c",
"assets/assets/images/pertemuan4/modul_Page21.png": "8c1795aca0f683974b19a82dae4d8949",
"assets/assets/images/pertemuan4/modul_Page22.png": "8b8daf7b5a460bbd0fcd54f2810cdb9b",
"assets/assets/images/pertemuan4/modul_Page23.png": "756568989cdeff009f219fd618960fe3",
"assets/assets/images/pertemuan4/modul_Page24.png": "bb5c00ba1a0abf98b972a3fd54a0717c",
"assets/assets/images/pertemuan4/modul_Page26.png": "b9db9f5d0a0c6df21e92093ac8977603",
"assets/assets/images/pertemuan4/modul_Page27.png": "95a687dcc25a34820f6040963faf0146",
"assets/assets/images/pertemuan4/modul_Page32.png": "c5178c61daeb0abc66c52e95ef672597",
"assets/assets/images/pertemuan4/modul_Page25.png": "bd177743cbc0c313f3eca16fb41a09d3",
"assets/assets/images/pertemuan4/modul_Page30.png": "4aa18d7f7e273dd0f35e4d43abe6ebf2",
"assets/assets/images/pertemuan4/modul_Page31.png": "7824700104cd68089200145d03fc53bb",
"assets/assets/images/pertemuan4/modul_Page28.png": "25c65bf36336cf62cbdb4d92a0085478",
"assets/assets/images/pertemuan4/modul_Page29.png": "f274f9f9cd2418538d1aa11889a5bc60",
"assets/assets/images/pertemuan4/modul_Page33.png": "f86765052b5f418dd57d0d8f505ac8f6",
"assets/assets/images/pertemuan4/modul_Page34.png": "114ce85d5f36aa8d2c09932bc1abca59",
"assets/assets/images/pertemuan4/modul_Page36.png": "d9bd09cf60e0b16b5e50005a5e822725",
"assets/assets/images/pertemuan4/modul_Page37.png": "06a8e40fbc5465c74209a2953ff31edb",
"assets/assets/images/pertemuan4/modul_Page35.png": "387c13461dfb1270fa84cff608cb1f18",
"assets/assets/images/pertemuan4/modul_Page38.png": "0a91cc16bc1eb6959811ab1f7316a7d7",
"assets/assets/images/pertemuan4/modul_Page40.png": "70da03f08f98a7c2ce2c0d8c5afb43cf",
"assets/assets/images/pertemuan4/modul_Page39.png": "23f369079be91ac91e48c093674ac3ee",
"assets/assets/images/pertemuan4/modul_Page44.png": "cc5984f46e81957a937d31db08595aec",
"assets/assets/images/pertemuan4/modul_Page45.png": "54e1c1facdfca74c760bf846720e026e",
"assets/assets/images/pertemuan4/modul_Page50.png": "a23bcb5b0b9c20a74fca81dd5b322a41",
"assets/assets/images/pertemuan4/modul_Page49.png": "93cb701ceee36916488c38c849b0fa13",
"assets/assets/images/pertemuan4/modul_Page51.png": "1ee2bf38785296fcdf402d086b4653d7",
"assets/assets/images/pertemuan4/modul_Page47.png": "43265bc0f2a70c3c98b0ce0609b5f430",
"assets/assets/images/pertemuan4/modul_Page46.png": "c3a5f45c8e58deed5f16c141fe148d78",
"assets/assets/images/pertemuan4/modul_Page48.png": "31315812b7fa432597b7fbee917b2544",
"assets/assets/images/pertemuan4/modul_Page52.png": "884ed5af2e5e741add8e39cecdcf4929",
"assets/assets/images/pertemuan4/modul_Page54.png": "bf003b70a61d9d6f37c4c5c43d238b1e",
"assets/assets/images/pertemuan4/modul_Page53.png": "9c0042967049e7b7c2c293a99580bf09",
"assets/assets/images/pertemuan4/modul_Page43.png": "08cf589c271e9112a8db99c35aa21b91",
"assets/assets/images/pertemuan4/modul_Page55.png": "8f37c567332b3a7f06199d6f2596a6da",
"assets/assets/images/pertemuan4/modul_Page56.png": "bde51bbdaca74cf547c09473cdfe7ffe",
"assets/assets/images/pertemuan4/modul_Page57.png": "a0bd0c00d482c6690297674090c4e12c",
"assets/assets/images/pertemuan4/modul_Page58.png": "b32e90e6698ac89c9d6c31a433bbefd7",
"assets/assets/images/pertemuan4/modul_Page42.png": "8e8f090a774285bc19b7d81db2932def",
"assets/assets/images/pertemuan4/modul_Page59.png": "b945d641a792d960df21f98f6f397555",
"assets/assets/images/pertemuan4/modul_Page60.png": "810d00bb521d692461d542b9476e8f59",
"assets/assets/images/pertemuan4/modul_Page61.png": "8e3870e0306edc2ac55d07eb299166a5",
"assets/assets/images/pertemuan4/modul_Page62.png": "544a40aedc025549e38b4ac3518db361",
"assets/assets/images/pertemuan4/modul_Page63.png": "529d687534c73dc24cf20c144ebc778e",
"assets/assets/images/pertemuan4/modul_Page64.png": "6d2ae847632d82426ccb3ca997ce9c9e",
"assets/assets/images/pertemuan4/modul_Page41.png": "748b1a41b70d2f55dc85de25fc91d65e",
"assets/assets/images/pertemuan4/modul_Page65.png": "e6c515ca6ac865b532a51b37613059c2",
"assets/assets/images/pertemuan4/modul_Page66.png": "e0cddc579207fed679187feaf9053cd6",
"assets/assets/images/pertemuan4/modul_Page67.png": "516ad12d07be4b6fd2657fffbe89f0a3",
"assets/assets/images/pertemuan4/modul_Page68.png": "fbe6ee1824c5d4e6b62a10a45659fec6",
"assets/assets/images/pertemuan4/modul_Page69.png": "26879e3ef872e7dcab3d5be6d5c624c3",
"assets/assets/images/pertemuan4/modul_Page70.png": "c5f224d1f4c2d0dbc256a6445064993c",
"assets/assets/images/pertemuan4/modul_Page71.png": "3d985108b08ec730d7e5499e825f314c",
"assets/assets/images/pertemuan4/modul_Page72.png": "e2e8d68aaf44888fcf67286da38a76a8",
"assets/assets/images/pertemuan4/modul_Page74.png": "c42264967384e65a8ac72f23a8ad7fe5",
"assets/assets/images/pertemuan4/modul_Page73.png": "28100fa26a867cff37d1b001025547ce",
"assets/assets/images/pertemuan4/modul_Page75.png": "f5969243c9fde5b89eb47e0c34798e22",
"assets/assets/images/pertemuan4/modul_Page76.png": "1e5a83cff2d9abe018f9d0426e9fa30c",
"assets/assets/images/pertemuan4/modul_Page77.png": "ce293f2f48dbf6677d9e9522bd47f6e8",
"assets/assets/images/pertemuan4/modul_Page78.png": "9b36fa92745c095e0ecdfe8024dc5651",
"assets/assets/images/pertemuan4/modul_Page79.png": "fc7e2fb17a414c71c1c16e535f96f411",
"assets/assets/images/pertemuan4/modul_Page80.png": "42f77d225732bb63619988637f4e3e41",
"assets/assets/images/pertemuan4/modul_Page82.png": "5fc4949c7fbd016bcdf93a4bc7822c47",
"assets/assets/images/pertemuan4/modul_Page83.png": "bfb14f567af54565e195b7e5ceb107fb",
"assets/assets/images/pertemuan4/modul_Page84.png": "4c3700a0297f7a48d7114362dc3e3240",
"assets/assets/images/pertemuan4/modul_Page85.png": "ecfa93a2bb47a0309fddcb4a145ca742",
"assets/assets/images/pertemuan4/modul_Page86.png": "90248e3de0053756555c641aa8b8f3a3",
"assets/assets/images/pertemuan4/modul_Page87.png": "7c3bef712cb3201f8701eae3bf1a3b38",
"assets/assets/images/pertemuan4/modul_Page88.png": "b4b9d04a17e1e9b9fbf3df2700289b9d",
"assets/assets/images/pertemuan4/modul_Page89.png": "6ab9ada41f92fa34c7b88c56124c1320",
"assets/assets/images/pertemuan4/modul_Page90.png": "0fa37e16ae76719161e48d221b53971e",
"assets/assets/images/pertemuan4/modul_Page81.png": "1f306c1b8331776cf60eded429f0c3ea",
"assets/assets/images/pertemuan4/modul_Page91.png": "e3421674492bdff542c292b4d410412c",
"assets/assets/images/pertemuan4/modul_Page92.png": "583b912d3b93478a0b042719bc4083ca",
"assets/assets/images/pertemuan4/modul_Page93.png": "c3503b8c51dd166daf7b5c66e43afe6a",
"assets/assets/images/pertemuan4/modul_Page94.png": "74a68b34de937ba6a986703b6645152a",
"assets/assets/images/pertemuan4/modul_Page95.png": "9df05d4a1f5569cfd1bc5d5738875816",
"assets/assets/images/pertemuan4/modul_Page97.png": "a92cf94809a46b4194a96d74636af12c",
"assets/assets/images/pertemuan4/modul_Page96.png": "4c6ffa13a3c8e55a784a4d0f4ae1bd37",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/fonts/MaterialIcons-Regular.otf": "3c2c1a659641ea19ca9c2e1552e6b4fe",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "250edc83000367f2db0944dcdf226aa8",
"assets/AssetManifest.bin": "5b32b2edf7230aa7a7f1db61e6df62a4",
"assets/AssetManifest.bin.json": "f811ed32c368376d1bbff082a3864866",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "329b5d01d05b122d84e318ed5d63ea01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "c9d25015d54a351088db977b3476fa23"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
