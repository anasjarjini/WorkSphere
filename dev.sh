#bin bash 
trap 'kill 0' EXIT
echo "demarege de backend larvel......"
(cd WorkSphere-backend&& php artisan serve)&
echo "demarage de frontend angular...."
(cd WorkSphere-frontend && ng serve)&
wait
