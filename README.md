# electron-asset-test

Test of post-build asset inclusion.

This is a proof of concept to demonstrate that assets can be excluded during the build and then later copied in, if they aren't explicitly required at the script level.

## Building instructions

First run `npm i` to install dependencies.

Follow the [Electron Packager](https://github.com/electron-userland/electron-packager) instructions to compile the app.

`electron-packager . dist --platform=(your platform) --arch=(your arch) --ignore=assets`

This will explicitly exclude the `assets` directory from the built app. If you run the app at this stage, there will be a broken image, but the app won't crash.

Once your app has been created, copy the `assets` directory into the correct directory under the build directory in `dist-(your platform)-(your arch)`.

For example, if your platform is OSX, you'd use the following command:

`cp -r assets dist-darwin-x64/dist.app/Contents/Resources/app/`

Then, when you run `dist-darwin-x64/dist.app`, the tick should appear.
