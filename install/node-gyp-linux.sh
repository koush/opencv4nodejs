export CFLAGS="$(pkg-config --cflags opencv4)"
export CXXFLAGS="$(pkg-config --cflags opencv4)"
export LDFLAGS="-Wl,--no-as-needed $(pkg-config --libs opencv4)"
node-gyp $@
