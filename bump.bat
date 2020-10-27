cd ./picoface
call npm version %1
cd ..
cd ./picochip-emulator
call npm version %1
cd ..
call rebundle.bat