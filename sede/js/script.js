var pokemon= angular.module("pokemon",[])
	pokemon.controller("listadopokemon",function($scope,$rootScope,$http){
		$scope.Listado=[];
		for(var i =0; i<100;i++){
				$http({
				method:"GET",
				url:"https://pokeapi.co/api/v2/pokemon/"+i
			}).then(function success(y){
				$scope.Listado.push(y);
				console.log("p.data.sprites.front_default")
				for(var imagen=0;imagen<100;imagen++){
					if(imagen<10){
						$scope.Listado[imagen].data.sprites.front_default="https://assets.pokemon.com/assets/cms2/img/pokedex/full/00"+$scope.Listado[imagen].data.id+".png"
					}else if (imagen>9){
						$scope.Listado[imagen].data.sprites.front_default="https://assets.pokemon.com/assets/cms2/img/pokedex/full/0"+$scope.Listado[imagen].data.id+".png"					}
				}
			})
		}
	})
	//https://pokeapi.co/api/v2/pokemon///
