import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { SwiperComponent } from './components/Swiper/SwiperComponent';
import { SwiperParts } from './components/SwiperParts/SwiperParts';
import { GridItem } from './components/GridTable/GridItem';
import { PowerPay } from './components/PowerPay/PowerPay';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  const [catItems, setCatItems] = useState([]);
  const [marcaItems, setMarcaItems] = useState([]);
  const [discountItems, setDiscounttems] = useState([]);
  const [televisoresItems, setTelevisoresItems] = useState([]);
  const [celularesItems, setCelularesItems] = useState([]);
  const [laptopItems, setLaptopItems] = useState([]);

  const readCategorias = async () => {
    try {
      const data = await fetch(
        'https://casar-db.onrender.com/categorias'
      );
      const response = await data.json();
      setCatItems(response);
    } catch (error) {
      console.log(error);
    }
  };
  const readMarcas = async () => {
    try {
      const data = await fetch(
        'https://casar-db.onrender.com/marcas'
      );
      const response = await data.json();
      setMarcaItems(response);
    } catch (error) {
      console.log(error);
    }
  };
  const readDiscountProducts = async () => {
    try {
      const data = await fetch(
        'https://casar-db.onrender.com/descuentosLimitados'
      );
      const response = await data.json();
      setDiscounttems(response);
    } catch (error) {
      console.log(error);
    }
  };
  const readTelevisores = async () => {
    try {
      const data = await fetch(
        'https://casar-db.onrender.com/Televisores'
      );
      const response = await data.json();
      setTelevisoresItems(response);
    } catch (error) {
      console.log(error);
    }
  };
  const readCelulares = async () => {
    try {
      const data = await fetch(
        'https://casar-db.onrender.com/Celulares'
      );
      const response = await data.json();
      setCelularesItems(response);
    } catch (error) {
      console.log(error);
    }
  };
  const readLaptops = async () => {
    try {
      const data = await fetch(
        'https://casar-db.onrender.com/Laptops'
      );
      const response = await data.json();
      setLaptopItems(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    readCategorias();
    readMarcas();
    readDiscountProducts();
    readTelevisores();
    readCelulares();
    readLaptops();
  }, []);

  return (
    <>
      <div className="interestContainer">
        <img
          src="https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/81704b8a-35ea-4ddc-a035-7c4114a4c3a1___648cd66efc37b43931182fbc07c200e8.jpg"
          alt="3 meses sin interes BCP"
        />
      </div>
      <Header />
      <PowerPay logoClass={'30px'} />
      <SwiperComponent />
      <main className="mainSection">
        <SwiperParts
          title={'Descubre las mejores categorías'}
          catItems={catItems}
          numSlides={6}
          classSwiper={''}
        />
        <section>
          <h2 className="sectionTitle">
            <img
              src="https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/6.1.7/images/home/seccion2/title_icon___138f2afceb6e4218167c58bda6b4c56c.png"
              alt="icon"
              className="iconTitle"
            />
            Ofertas relámpago de esta semana
          </h2>
          <div className="grid1">
            <GridItem
              classItem={'item1'}
              imageItem={
                'https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/e019ed19-fd54-430b-ae59-9ec170e65b9d___32d51203422ebb9c488df6550f81ce31.png'
              }
            />
            <GridItem
              classItem={'item2'}
              imageItem={
                'https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/0b847639-0f56-4293-bbe5-efe3352636ef___50b58503453450eef4f617ddcf66a131.png'
              }
            />
            <GridItem
              classItem={'item2'}
              imageItem={
                'https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/b694a279-f2e8-4c53-abfe-878aac23ee89___41516ae297051eb9b3bddad00d9f94a0.png'
              }
            />
            <GridItem
              classItem={'item2'}
              imageItem={
                'https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/02de0460-5b00-4d9c-a5f5-a507c433b89b___6aedd087ff2e11db3b7d9384141cc391.png'
              }
            />
            <GridItem
              classItem={'item1'}
              imageItem={
                'https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/aa7d015d-a1f5-4048-9973-5a711cea0fbc___9c407fff7cab0a35f16a275acf8e17e7.png'
              }
            />
          </div>
        </section>

        <SwiperParts
          title={'Descuentos únicos por tiempo limitado'}
          catItems={discountItems}
          numSlides={5}
          classSwiper={'SwiperContainer3'}
          mySwiper={'mySwiper3'}
          buttonNeeded={true}
          image={
            'https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/6.1.7/images/home/seccion3/title_icon___855ea1a4ab8bc6821e9e20bdd75b3788.png'
          }
        />

        <SwiperParts
          title={'Explora lo nuevo en Televisores'}
          catItems={televisoresItems}
          numSlides={5}
          classSwiper={'SwiperContainer3'}
          mySwiper={'mySwiper3'}
          buttonNeeded={true}
          image={''}
        />

        <section>
          <h2 className="sectionTitle">
            <img
              src="https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/6.1.7/images/home/seccion5/title_icon___1f8a4321a76ee26432bb35c9fc66e2a9.png"
              alt="icon"
              className="iconTitle"
            />
            ¡Todo lo que deseas, a precios especiales!
          </h2>
          <div className="grid1">
            <GridItem
              classItem={'item3'}
              imageItem={
                'https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/af64f6d9-220f-44ac-8e00-5880082c07a0___8852cb30e93a38160919ea08f1cc3fe7.png'
              }
            />
            <GridItem
              classItem={'item3'}
              imageItem={
                'https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/256d2b36-eb3c-4137-bc0d-04bae0fe0069___fb4e9abeba74b8e38dd1b115d34a0cb9.png'
              }
            />
            <GridItem
              classItem={'item3'}
              imageItem={
                'https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/5ae17dbd-e74f-4aca-b096-b7902a740e18___b2591642b370bc6e9311f14325faf9a7.png'
              }
            />
            <GridItem
              classItem={'item4'}
              imageItem={
                'https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/5434a962-cc21-412f-8c2d-efc155059b9d___df059ef9c7efabab1e0f6ad7c88efc78.png'
              }
            />
          </div>
        </section>

        <SwiperParts
          title={'Elige tu próximo smartphone'}
          catItems={celularesItems}
          numSlides={5}
          classSwiper={'SwiperContainer3'}
          mySwiper={'mySwiper3'}
          buttonNeeded={true}
          image={''}
        />
        <section>
          <h2 className="sectionTitle">Lo mejor de Samsung, ahora para ti</h2>
          <div className="grid1">
            <GridItem
              classItem={'item5'}
              imageItem={
                'https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/bca5499a-5db4-41db-a500-19ebad005f5f___cb2305a9ecfa65cccee99c62de2f7a03.png'
              }
            />
            <GridItem
              classItem={'item2'}
              imageItem={
                'https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/e2b78798-f371-4c14-aaa7-53ffdd086b8c___c9f2856c65b1bbc19f2c6fbe6a94acdc.jpg'
              }
            />
            <GridItem
              classItem={'item2'}
              imageItem={
                'https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/179395f9-0dc3-42b4-bdab-e1f5841b83b4___03243ca2c763d0a203c110d798750cb7.png'
              }
            />
            <GridItem
              classItem={'item6'}
              imageItem={
                'https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/f968ce35-0f31-4c14-8911-cc07cfe9c93b___1c3bb761e888786c02e75b55a2d6fccd.png'
              }
            />
          </div>
        </section>

        <section>
          <h2 className="sectionTitle">El mejor complemento para tu cocina</h2>
          <div className="grid1">
            <GridItem
              classItem={'item4'}
              imageItem={
                'https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/77c79c49-2ebb-4505-bf7e-52463f7dd970___5dfce879788cf453643efb0f80071c35.png'
              }
            />
          </div>
        </section>

        <SwiperParts
          title={''}
          catItems={laptopItems}
          numSlides={5}
          classSwiper={'SwiperContainer3'}
          mySwiper={'mySwiper3'}
          buttonNeeded={true}
          image={''}
        />

        <section>
          <h2 className="sectionTitle">
            Renueva tu hogar y equípalo por completo
          </h2>
          <div className="grid1">
            <GridItem
              classItem={'item7'}
              imageItem={
                'https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/fde059ff-ebb1-444c-a257-73101f5f6ed3___ee3c501452e0249fa804d8f1ac2d9ed8.png'
              }
            />
            <GridItem
              classItem={'item8'}
              imageItem={
                'https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/043befe1-3d1b-4e2f-b95a-e11a45b32965___2440b905bb17e866df596802da68ce20.jpg'
              }
            />
            <GridItem
              classItem={'item8'}
              imageItem={
                'https://carsaperupoc.vtexassets.com/assets/vtex.file-manager-graphql/images/d3861199-5b4f-4a8a-9bac-29dfe1894412___502a6b8795d2ce19f25a0e40df48de13.png'
              }
            />
          </div>
        </section>

        <SwiperParts
          title={'Trabajamos con las marcas más top del mercado'}
          catItems={marcaItems}
          numSlides={5}
          classSwiper={'SwiperContainer2'}
        />

        <section>
          <div className="grid1">
            <GridItem
              classItem={'item1'}
              imageItem={
                'https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/6.0.6/images/home/seccion12/image_1___a0a3dd6cce7f70a043813a0772657ef8.png'
              }
            />
          </div>
        </section>

        <section className="grid2">
          <img
            src="https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/5.0.0/images/footer/servicio1___b554bac96cff719402520aa23214f234.png"
            alt="promo1"
          />
          <img
            src="https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/5.0.0/images/footer/servicio2___2d0726305193e2b5610743f53fad5a28.png"
            alt="promo1"
          />
          <img
            src="https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/5.0.0/images/footer/servicio3___51119c70e7d80d9054fd4f0fca0b0d44.png"
            alt="promo1"
          />
          <img
            src="https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/5.0.0/images/footer/servicio4___1d857e668089dbbbe5df509cef68738c.png"
            alt="promo1"
          />
        </section>
      </main>

      <PowerPay
        logoClass={'50px'}
        PowerPayContainer2={'PowerPayContainer2'}
        textExtra={' y sin afectar toda tu línea'}
      />

      <Footer />
    </>
  );
};
