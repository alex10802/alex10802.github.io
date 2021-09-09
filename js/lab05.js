(function() {

    window.onload = function() {

        let apellidosnombres = document.getElementById("apenom");
        let fechanacimiento = document.getElementById("fecnac");
        let apaterno = document.getElementById("apepat");
        let amaterno = document.getElementById("apemat");
        let nombres = document.getElementById("nom");
        let longapellidos = document.getElementById("lonape");
        let edad = document.getElementById("edad");
        let mess = document.getElementById("mes");
        let butextraer = document.getElementById("extraer");
        let button = document.getElementById("colorear");

        butextraer.addEventListener("click", function() {

            const APnom = document.getElementById('iapenom');
            let APnombres = APnom.value;
            let NMat = APnombres.split(/\s+/);
            const PAT = document.getElementById('iapepat');
            PAT.value = NMat[0];
            const MAT = document.getElementById('iapemat');
            MAT.value = NMat[1];
            const NomCompletos = document.getElementById('inom');

            for (let i = 2; i < NMat.length; i++) {
                NomCompletos.value += NMat[i] + " ";
            }
            document.getElementById("ilonape").value = ((PAT.value + MAT.value).length);

            let fecha = document.getElementById("ifecnac").value;
            let a = new Date();
            let cump = new Date(fecha);
            let edad = a.getFullYear() - cump.getUTCFullYear();
            let mes = (a.getMonth() + 1) - (cump.getMonth() + 1);
            console.log((a.getMonth() + 1) + "-" + (cump.getMonth() + 1));

            if (mes < 0) {
                edad = edad - 1;
            } else if (mes == 0) {
                if (a.getDate() < cump.getDate()) {
                    edad = edad - 1;
                }
            }

            document.getElementById("iedad").value = (+edad);
            let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"
            ];
            let dia = new Date(cump);
            document.getElementById("imes").value = (meses[dia.getMonth()]);
        });

        button.addEventListener("click", pintarCajas);

        let cont = 0;

        function pintarCajas() {
            if (cont % 2 == 0) {
                apellidosnombres.style.backgroundColor = "rgb(100, 14, 14)";
                fechanacimiento.style.backgroundColor = "rgb(100, 14, 14)";
                apaterno.style.backgroundColor = "rgb(100, 14, 14)";
                amaterno.style.backgroundColor = "rgb(100, 14, 14)";
                nombres.style.backgroundColor = "rgb(100, 14, 14)";

                longapellidos.style.backgroundColor = "rgb(6, 62, 114)";
                edad.style.backgroundColor = "rgb(6, 62, 114)";
                mess.style.backgroundColor = "rgb(6, 62, 114)";
            }

            if (cont % 2 != 0) {
                apellidosnombres.style.backgroundColor = "rgb(6, 62, 114)";
                fechanacimiento.style.backgroundColor = "rgb(6, 62, 114)";
                apaterno.style.backgroundColor = "rgb(6, 62, 114)";
                amaterno.style.backgroundColor = "rgb(6, 62, 114)";
                nombres.style.backgroundColor = "rgb(6, 62, 114)";

                longapellidos.style.backgroundColor = "rgb(100, 14, 14)";
                edad.style.backgroundColor = "rgb(100, 14, 14)";
                mess.style.backgroundColor = "rgb(100, 14, 14)";
            }
            cont = cont + 1;
        }
        var d = new Date();


    }


})();