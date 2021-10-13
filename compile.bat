set output="not installed"
set local_dir=%CD%
for /f "delims=" %%i in ('npm -v 2^>nul') do set output=%%i
echo npm  %output%  found
if not %output% equ "not installed" (
	echo running 'npm install'
	cd ..\notificator-app\
	rem npm  install
	cd %local_dir%
	echo running 'npm run build'

	cd ..\notificator-app\
	npm run build 
)
