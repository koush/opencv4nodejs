export CFLAGS="$(pkg-config --cflags opencv)"
export CXXFLAGS="$(pkg-config --cflags opencv)"
export LDFLAGS="$(pkg-config --libs opencv)"
node-gyp $@
