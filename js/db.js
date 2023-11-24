const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2020,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico',
		imageUrl: 'https://img.remediosdigitales.com/243d13/bmw-serie-3-2020_03/1366_2000.jpg'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A4', 
        year: 2020, 
        precio: 40000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico',
		imageUrl: 'https://www.latercera.com/resizer/kwqkVqbg8pqelxl_x6311JUbj0Q=/arc-anglerfish-arc2-prod-copesa/public/B2GUDHIIQFE4PH6CSOBLJ5MXHU.jpg' 
    },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico',
		imageUrl: 'https://d1gl66oyi6i593.cloudfront.net/wp-content/uploads/2016/07/prueba-ford-mustang-2015-ecoboost.jpg'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A6', 
        year: 2020, 
        precio: 35000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico',
		imageUrl: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2020-Audi-A6-55-TFSI-Quattro-S-Line-sedan-black-James-Cleary-1200x800p-%281%29.jpg' 
    },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico',
		imageUrl: 'https://noticias.coches.com/wp-content/uploads/2016/11/bmw_328i-gran-turismo-sport-line-f34-australia-2013_r7.jpg'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico',
		imageUrl: 'https://acnews.blob.core.windows.net/imggallery/800x600/GAZ_8aa6ce5c52c743049c2cb496b8f728f4.jpg'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual',
		imageUrl: 'https://img.remediosdigitales.com/546f3f/chevrolet-camaro-zl1-2018/1366_2000.jpg'
	},
	{ 
        marca: 'Ford', 
        modelo: 'Mustang', 
        year: 2019, 
        precio: 80000, 
        puertas: 2, 
        color: 'Rojo', 
        transmision: 'manual',
		imageUrl: 'https://www.diariomotor.com/imagenes/2019/03/ford-mustang-2019-oferta.jpg' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico',
		imageUrl: 'https://i.pinimg.com/originals/93/5e/9e/935e9ed94b14808372a699523ac43837.jpg'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A3', 
        year: 2017, 
        precio: 55000, 
        puertas: 2, 
        color: 'Negro', 
        transmision: 'manual',
		imageUrl: 'https://cdn1.luxurynewsmotor.com/wp-content/uploads/2017/05/prueba_audi_a3_tdi_150cv_luxury_news_motor-149.jpg'
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual',
		imageUrl: 'https://i.pinimg.com/originals/95/ff/f3/95fff3cd4387b8e9272d46c40351eba9.jpg'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico',
		imageUrl: 'https://img.remediosdigitales.com/2cdcca/mercedes-benz-clase-c-2018-motorpasion-1/1366_2000.jpg'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico',
		imageUrl: 'https://static.motor.es/fotos-noticias/2019/07/bmw-serie-5-g30-recreaciones-201959323-1563782969_2.jpg'
	},
	{ 
        marca: 'Ford', 
        modelo: 'Mustang', 
        year: 2017, 
        precio: 60000, 
        puertas: 2, 
        color: 'Negro', 
        transmision: 'manual',
		imageUrl: 'https://i.pinimg.com/originals/32/ac/fc/32acfc4dfbdb4ffb1257f420bd56ba09.jpg' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico',
		imageUrl: 'https://i.pinimg.com/736x/1a/c2/75/1ac275db70224d02bd5cba9daabc6af0.jpg'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico',
		imageUrl: 'https://www.bmw.com.ar/content/dam/bmw/common/all-models/3-series/sedan/2018/inform/bmw-3series-3er-inform-lines-02-01.jpg.asset.1624549612346.jpg'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico',
		imageUrl: 'https://www.autofacil.es/wp-content/uploads/2016/11/bmw-serie-5-2017.jpg'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico',
		imageUrl: 'https://i.pinimg.com/736x/1b/0c/79/1b0c79b27963b2fbe682b1505be6f505.jpg'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A4', 
        year: 2016, 
        precio: 30000, 
        puertas: 4, 
        color: 'Azul', 
        transmision: 'automatico',
		imageUrl: 'https://www.megautos.com/wp-content/uploads/2016/05/Audi-A4-2016-cuarto-delantero.jpg' 
    },
	{ 
        marca: 'Ford', 
        modelo: 'Mustang shelby GT500', 
        year: 2022, 
        precio: 90000, 
        puertas: 2, 
        color: 'Azul', 
        transmision: 'automatico',
		imageUrl: 'https://fotos.perfil.com/2019/06/28/el-nuevo-ford-mustang-shelby-gt500-ofrecera-760-caballos-de-potencia-747118.jpg'
    }
];
