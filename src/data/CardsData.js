const cardsData = [
    {
        "id": 1,
        "title": "Probando Rare Beauty de Selena Gomez! 💓 Hablé Con ella OMG 😳",
        "category": "MAKEUP",
        "photo": "https://img.youtube.com/vi/gORyy_2TnEs/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/gORyy_2TnEs?si=RCuwaxC45yyDXr_o",
        "description": "Pau nos lleva a un emocionante recorrido probando los productos de maquillaje de Rare Beauty, la marca de Selena Gomez. Además, ¡nos cuenta cómo tuvo la increíble oportunidad de hablar directamente con Selena! No te pierdas sus primeras impresiones, reseñas y todo lo que tiene que decir sobre esta línea de belleza tan esperada. ¡Prepárate para muchas sorpresas y momentos emocionantes!"
    },
    {
        "id": 2,
        "title": "Probando Maquillaje Coreano de BTS!! ¿Vale la Pena?😰+ SORTEO!",
        "category": "MAKEUP",
        "photo": "https://img.youtube.com/vi/dte9DcXfgcU/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/dte9DcXfgcU?si=dDywtOqou7plPdOT",
        "description": "Claudipia se aventura en el fascinante mundo del maquillaje coreano con una temática muy especial: ¡los productos inspirados en BTS! Nos mostrará su experiencia probando estos cosméticos, compartiendo sus opiniones sinceras sobre si realmente valen la pena. Además, Claudipia tiene una sorpresa especial para sus seguidores: ¡un sorteo increíble! No te pierdas este video lleno de emoción, curiosidad y, por supuesto, amor por BTS. 😰💜"
    },
    {
        "id": 3,
        "title": "Mis Favoritos de Maquillaje, Pelo, Skincare y Más del Momento!",
        "category": "MAKEUP",
        "photo": "https://img.youtube.com/vi/EX3qKNa9tRE/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/EX3qKNa9tRE?si=U0MyjLan8do65NKz",
        "description": "Rosy comparte con nosotros sus productos favoritos, desde maquillaje y cuidado del cabello hasta productos de skincare. Si estás buscando nuevos productos para probar y consejos para mejorar tu rutina de belleza, ¡este video es para ti! No te pierdas sus opiniones sinceras y sus tips imprescindibles para lucir radiante."
    },
    {
        "id": 4,
        "title": "Reseña y Tutorial Todo de Dior Makeup",
        "category": "MAKEUP",
        "photo": "https://img.youtube.com/vi/0SXznbzOCc0/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/0SXznbzOCc0?si=gucakRQB_60jfMO4",
        "description":  " Desde bases y sombras hasta labiales y más, Pau nos muestra cómo crear un look espectacular con Dior. Nos dará sus impresiones sinceras sobre la calidad y desempeño de cada producto mientras nos guía paso a paso en su aplicación."
    },
    {
        "id": 5,
        "title": "Usando la GUA SHA por 30 DÍAS (resultados + rutina)",
        "category": "SKINCARE",
        "photo": "https://img.youtube.com/vi/hrhQf5lgY1Y/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/hrhQf5lgY1Y?si=IHQkTuTjWzSLQYZs",
        "description":"Vamos a explorar los efectos y beneficios de usar la Gua Sha durante 30 días. Te mostraré mi rutina diaria, cómo utilizar correctamente esta herramienta tradicional de belleza y los resultados que he obtenido a lo largo del mes."
    },
    {
        "id": 6,
        "title": "¡NO TE PUEDE FALTAR ESTO! Productos básicos de Skincare",
        "category": "SKINCARE",
        "photo":  "https://img.youtube.com/vi/kqJFnMwNzp4/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/kqJFnMwNzp4?si=kkQECQmoNHhy1PyL",
        "description": "Desde limpiadores y tónicos hasta serums y cremas hidratantes, te mostraré los imprescindibles para mantener tu piel sana y radiante. No importa tu tipo de piel, estos productos te ayudarán a lograr una piel perfecta. ¡Acompáñame y descubre cuáles son los esenciales de skincare que debes tener!"
    },
    {
        "id": 7,
        "title": "TIKTOK me hizo probarlo, Peeling Solution de The Ordinary",
        "category": "SKINCARE",
        "photo": "https://img.youtube.com/vi/3yk7TpWCvs0/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/3yk7TpWCvs0?si=9TAQBFaGPVL-x3Sg",
        "description": "Descubre cómo esta potente solución exfoliante ha funcionado en la piel de Lilia, sus impresiones sinceras y si realmente vale la pena todo el hype que ha generado en las redes sociales. Si has estado curioso por probar este producto o simplemente quieres saber más sobre él, ¡no te pierdas este video!"
    },
    {
        "id": 8,
        "title": "COLOR WOW Dream Coat | ¿Adiós al frizz? ¿Merece la pena?",
        "category": "HAIRCARE",
        "photo": "https://img.youtube.com/vi/hzVeMwnQUhQ/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/hzVeMwnQUhQ?si=bxKvKFcEO2PPp5Xc",
        "description": "A probar el famoso COLOR WOW Dream Coat, un producto que se ha vuelto viral en TikTok. Promete decirle adiós al frizz y dejar el cabello suave y brillante. ¿Realmente cumple con lo que promete? ¡Acompáñame mientras pongo a prueba este tratamiento y descubro si merece la pena todo el hype! No te pierdas mis primeras impresiones y resultados."
    },
    {
        "id": 9,
        "title": "TUTORIAL de ONDAS con Dyson AirWrap ¿Vale la pena?",
        "category": "HAIRCARE",
        "photo": "https://img.youtube.com/vi/HsaJe4pXYOI/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/HsaJe4pXYOI?si=3TsxeZW7bOUB1Dc1",
        "description":"Tutorial paso a paso para crear ondas perfectas utilizando el Dyson AirWrap. Este innovador dispositivo de estilizado ha causado sensación, pero ¿realmente vale la pena? Vamos a ponerlo a prueba y descubrir si cumple con sus promesas de facilidad y resultados profesionales."
    },
    {
        "id": 10,
        "title": "7 Técnicas para Definir los Rizos - Las Mejores",
        "category": "HAIRCARE",
        "photo": "https://img.youtube.com/vi/htD1U7uDM9w/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/htD1U7uDM9w?si=_AwuCO-KHTUJ7Lr0",
        "description": "FrizzyDesi nos comparte sus 7 técnicas favoritas para definir rizos y lograr ese look perfecto. Si tienes el cabello rizado y buscas maneras efectivas de controlar el frizz y resaltar tus rizos, ¡este video es para ti!"
    }
];

export default cardsData;