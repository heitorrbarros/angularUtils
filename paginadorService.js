/*
	Serviço para paginação de dados.	
*/
angular.module('angularUtils')
       .factory('paginadorService', function () {
           var paginador = function Paginador(porPagina, arrayParaPaginar) {

               var tamanhoDoArray = arrayParaPaginar.length;
               var totalPaginas = Math.ceil(tamanhoDoArray / porPagina);

               var paginas = [];

               var pos = 0;
               for (var i = 0; i < totalPaginas; i++) {
                   var pagina = arrayParaPaginar.slice(pos, pos + porPagina);
                   paginas.push(pagina);
                   pos = pos + porPagina;
               }

               return {
                   numerosPaginas: paginas.length,
                   ultimaPagina: paginas.length - 1,
                   primeiraPagina: 0,
                   numPaginaAtual: 0,
                   paginaAtual: 0,
                   paginas: paginas,
                   proximaPagina: function () {
                       this.numPaginaAtual++;
                       this.paginaAtual = paginas[this.numPaginaAtual];
                   },
                   voltarPagina: function () {
                       this.numPaginaAtual--;
                       this.paginaAtual = paginas[this.numPaginaAtual];
                   }
               };               
           };

           return paginador;
       });