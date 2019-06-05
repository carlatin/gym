var pokemon= angular.module("pokemon",[])
	pokemon.controller("listadopokemon",function($scope,$rootScope,$http){
		$scope.Listado=[];
		for(var i = 1; i<100;i++){
				$http({
				method:"GET",
				url:"https://pokeapi.co/api/v2/pokemon/"+i
			}).then(function success(y){
				$scope.Listado.push(y);
				console.log("p.data.sprites.front_default")
				for(var imagen=1;imagen<100;imagen++){
					if(imagen<10){
						$scope.Listado[imagen].data.sprites.front_default="https://assets.pokemon.com/assets/cms2/img/pokedex/full/00"+imagen+".png"
					}
				}
			})
		}
	})
	//https://pokeapi.co/api/v2/pokemon///