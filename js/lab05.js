(function() {

    window.onload = function() {

        let AN = document.getElementById("APEnom");
        let Fec = document.getElementById("FECnac");
        let AP = document.getElementById("APEpat");
        let AM = document.getElementById("APEmat");
        let Noms = document.getElementById("NOM");
        let LA = document.getElementById("LONape");
        let E = document.getElementById("EDA");
        let ML = document.getElementById("MES");
        let butextraer = document.getElementById("extraer");
        let button = document.getElementById("colorear");

        butextraer.addEventListener("click", function() {

            const APnom = document.getElementById('IAPEnom');
            let APnombres = APnom.value;
            let NMat = APnombres.split(/\s+/);
            const PAT = document.getElementById('IAPEpat');
            PAT.value = NMat[0];
            const MAT = document.getElementById('IAPEmat');
            MAT.value = NMat[1];
            const NomCompletos = document.getElementById('INOM');

            for (let i = 2; i < NMat.length; i++) {
                NomCompletos.value += NMat[i] + " ";
            }

            document.getElementById("ILONape").value = ((PAT.value + MAT.value).length + " letras ");

            let fecha = document.getElementById("IFECnac").value;
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

            document.getElementById("IEDA").value = (+edad + " años");
            let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ];
            let dia = new Date(cump);
            document.getElementById("IMES").value = (meses[dia.getMonth()]);
        });

        button.addEventListener("click", pintarCajas);

        let cont = 0;

        function pintarCajas() {
            if (cont % 2 == 0) {
                AN.style.backgroundColor = "#a51616";
                Fec.style.backgroundColor = "#a51616";
                AP.style.backgroundColor = "#a51616";
                AM.style.backgroundColor = "#a51616";
                Noms.style.backgroundColor = "#a51616";
                LA.style.backgroundColor = "#1468b8";
                E.style.backgroundColor = "#1468b8";
                ML.style.backgroundColor = "#1468b8";
            }

            if (cont % 2 != 0) {
                AN.style.backgroundColor = "#1468b8";
                Fec.style.backgroundColor = "#1468b8";
                AP.style.backgroundColor = "#1468b8";
                AM.style.backgroundColor = "#1468b8";
                Noms.style.backgroundColor = "#1468b8";
                LA.style.backgroundColor = "#a51616";
                E.style.backgroundColor = "#a51616";
                ML.style.backgroundColor = "#a51616";
            }
            cont = cont + 1;
        }
        var d = new Date();


    }


})();