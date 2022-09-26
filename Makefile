.PHONY: build uninstall-android install-android

build:
	cd android && ./gradlew assembleRelease

uninstall-android:
	adb uninstall com.helloreactnative

install-android: uninstall-android
	adb install android/app/build/outputs/apk/release/app-release.apk
