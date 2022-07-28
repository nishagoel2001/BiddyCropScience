let products = [
  {
    name: 'PARMANU',
    description:
      'Parmanu is 100 % Natural, safer and enriched organic plant bio-stimulant.It is useful in early germination, vigorious seeding growth,profuse primary and secondary root development,increase soil microbial activity, higher nutrition uptake, better branching and increased foliage, reduction in the fruit and flower drop etc. It can be mixed with all types of Pesticides/ fungicide and PGR products.',
    image: './img/products/products-big/parmanu-removebg-preview-min.png',
    package: '<b>5 gm, 25 gm</b> and <b>50gm </b>pouch packsize.',
  },
  {
    name: 'Bio-Grow',
    description:
      'Biddy Bio-Grow is 100 % natural and enriched organic plant bio-stimulant and safe to use. It promotes uptake of nutrients and improves crop quality. It increases plant resistance to pest and disease. Biddy bio-grow increase drought tolerance of the soil and plant.It can be mix with all types of Pesticides/ fungicide and PGR products.',
    image: './img/products/products-big/biogrow-removebg-preview-min.png',
    package: '<b>5 gm, 25 gm </b>and <b>50 gm </b>pouch packsize.',
  },
  {
    name: 'MAXO',
    description:
      'Maxo is a combination of humic acid and nb based latest formula derived from the natural extracts fortified with vitamin, plant hormones, enzymes etc. MAXO stimulates the enzyme process in plants that results into adequate and proportional quantities. It helps in early sprouting of seeds and can be developed quickly in constant rate. It rectifies the deficiency of the plants, adding more shine and grow to the fruit size. It protects the plants against adverse condition and stops shedding of leaves, flowers, buds,fruit etc.',
    image: './img/products/products-big/maxo-removebg-preview-min.png',
    package: '<b>100 ml, 250 ml, 500 ml </b>and <b>1 ltr </b> per bottle.',
  },
  {
    name: 'KILLER POWER',
    description:
      'Killer power is a product based on enhanced bio-technlogical research. It saves plants against all types of larva in the crops. It is safe to use and can be mixed with all tupes of fungicides/ pesticides and PGR products.',
    image: './img/products/products-big/killerpower-removebg-preview-min.png',
    package: '<b>6 ml, 15 ml, 24 ml </b>and <b>60ml</b> packsize.',
  },
  {
    name: 'Tonix',
    description:
      'Biddy TONIX is a biotechnological flowering stimulant that serves as a booster for all crops. Biddy TONIX positively influences on the several physiological functions in the plant systems which leads to increase in cell division & enlargement. It is very useful for faster plant improvement, more flowers, leafs and branches. It can be mixed with all types of pesticides/ fungicides and PGR products.',
    image: './img/products/products-big/tonix-removebg-preview-min.png',
    package: '<b>100 ml, 250 ml, 500 ml </b>and <b>1 ltr </b>per bottle.',
  },
  {
    name: 'Mantra',
    description:
      'Mantra is plant growth stimulator. It is helpful for plants to gain more micronutrients from soil. It inncreases nutrient uptake in soil application, decrease toxins, water retention, improves microbial growth and is better over soil structure. It can be mixed with all types of Pesticides/ fungicide and PGR products.',
    image: './img/products/products-big/mantra-removebg-preview-min.png',
    package: '<b>100 ml, 250ml, 500 ml </b>and <b>1 ltr</b> pet bottle.',
  },
  {
    name: 'Cross HD',
    description:
      'CROSS HD induces naturally occuring alkaloids lactones and growth promoting enzymes. It is safer for crops and it improves overall health of the plants. It saves plants from hazardous sucking insect pest particularly thrips, leafhoppers,mites etc.',
    image: './img/products/products-big/crosshd-removebg-preview-min.png',
    package: '<b>2 ml </b> packsize.',
  },
  {
    name: 'Shakti',
    description:
      'SHAKTI 50 G is a growth promoting agent for soil application. It is pure and natural and can be used on all types of vegetables, cotton, horticulture crops and field crops and can be mixed with all type of fertilizers, organic or inorganic.',
    image: './img/products/products-big/shakti-removebg-preview-min.png',
    package: '<b>1 kg </b>HDPE jar packing size.',
  },
  {
    name: 'Rango',
    description:
      'RANGO is a silicon based spreader and is a unique product that helps to reduce input cost by minimizing wastage and enhances the efficacy of pesticides/ fungicide and any PGR products.',
    image: './img/products/products-big/rango-removebg-preview-min.png',
    package: '<b>10 ml</b> and <b>25 ml.</b> pack size',
  },
  {
    name: 'Ninja Power',
    description:
      'NINJA POWER is a product based on advanced Italian technology. It has excellent wetting and spreading property. It helps in uniform distribution,increase penetration, helps in quick drying and it enhances sticking & spreading power . It can be mixed with all types of fungicides/ pesticides and PGR products.',
    image: './img/products/products-big/ninjapower-removebg-preview-min.png',
    package: '<b>10 ml</b> and<b>20 ml </b>packsize.',
  },
  {
    name: 'Giba',
    description:
      'GIBA is highly sepecialized plant growth ntrient. Giba induce seed germination, promote shoot growth and internode elogation, determine the sex expression of plant, and it is involved in promoting the flowering of plants. Giba is available in 10 ml pack size only..',
    image: './img/products/products-big/giba-removebg-preview-min.png',
    package: '10 ml pack size only',
  },
  {
    name: 'Sticko',
    description:
      'STICKO has an excellent wetting property, it helps in uniform distribution, increases penetration, helps in quick drying and it enhances sticking power. It can be mixed with all types of fungicides/ pesticides and PGR products.',
    image: './img/products/products-big/sticko-removebg-preview-min.png',
    package: '<b>50ml, 100 ml, 250 ml </b>etc.',
  },
  {
    name: 'Fungi plus',
    description:
      'Fungi plus is a highly specialized bio-derivative which provides excellent action for fungal infection like downy mildue, antracrose, ring spot, powdery mildue etc in crops. It can be mixed with all types of fungicides/ pesticides and PGR products.',
    image: './img/products/products-big/fungiplus-removebg-preview-min.png',
    package: '<b>25 ml, 50 ml, 100 ml</b> and <b>250 ml</b> size.',
  },
  {
    name: 'Panther',
    description:
      'Panther is a product based on enhanced bio-technlogical research. It\n' +
      'saves plants against all types of larva, army worm, boll worm, root worm, pink ball worm,\n' +
      'heliothis and spodoptera in all crops. It is safe to use. It can be mixed with all types\n' +
      'of fungicides/ pesticides and PGR products.',
    image: './img/products/products-big/panther-removebg-preview-min.png',
    package: '<b> 50 ml, 100 ml, 250 ml</b> packsize.',
  },
  {
    name: 'Chetak Super 30',
    description:
      'Biddy CHETAK Super is highly recommended to control weed and insect for\n' +
      'cotton, vegetables and other crops. It saves plant against white fly. It has no hazardous\n' +
      'chemicals which can cause problems to the environment.',
    image: './img/products/products-big/chetak-removebg-preview-min.png',
    package: '<b>6 ml, 15 ml, 24 ml </b>and 60ml packsize.',
  },
  {
    name: 'Cross',
    description:
      'CROSS induces naturally occuring alkaloids lactones and growth promoting enzymes. It is safer to crops and it improves overall helth of the plants. It save plants from hazardous sucking  insect pest particularly Thrips, leafhoppers,mites etc. ',
    image: './img/products/products-big/cross-removebg-preview-min.png',
    package: ' <b>20 ml</b> packsize.',
  },
  {
    name: 'Shera',
    description: `Biddy's SHERA is a product based on advanced bio technlogical research containing highly specialized bio-derivative and can be useful in the appropriate scientific concentration which gives the excellent action for pest management in all agricultural crops. It is eco-friendly in nature and can target pest like thrips, mites, jesid etc`,
    image: './img/products/products-big/shera-removebg-preview-min.png',
    package: '<b>50 ml, 100ml, 250 ml, 500 ml </b>packing size.',
  },
  {
    name: 'Micro Plus',
    description:
      'Micro Plus is a Micronutrient type plant growth nutrient. Micro Plus has longer self life, growth promoting agent and useful in root and fruit development and setting.',
    image: './img/products/products-big/microplus-removebg-preview-min.png',
    package: '10 gm pouches for 15 ltr of water.',
  },
  {
    name: 'Vitara Magic',
    description:
      'Vitara Magic is a highly specialized bio-derivative which gives the excellent action for the fungal infection like Downy mildue, Antracrose, Ring spot, powdery mildue, dark spot viral and wilt in all crops. It can be mix with all types of fungicides/ pesticides and PGR products.',
    image: './img/products/products-big/vitaramagic-removebg-preview-min.png',
    package: '<b>50 gm, 100 gm, 250 gm</b> packing size.',
  },
];
function showModal(index) {
  $('#productName').html(products[index].name);
  $('#productDescription').html(products[index].description);
  $('#productPackage').html(products[index].package);
  $('#productImage').attr('src', products[index].image);
  $('.modal').modal('toggle');
}
$('#newsletterForm').submit((evt) => {
  evt.preventDefault();
  $('#newsletterSubmit').prop('disabled', true);
  $.ajax({
    url: './newsletter.php',
    type: 'POST',
    data: {
      email: $('#exampleInputEmail1').val(),
    },
    dataType: 'JSON',
    success: (res) => {
      $('#newsletterSubmit').prop('disabled', false);
      if (res.status) {
        $('#newsletterForm').trigger('reset');
        alert('Thank you for subscribing');
      } else {
        if (res.error.indexOf('Duplicate entry') >= 0)
          alert('Hi!.. You have already subscribed to our newsletter');
        else alert('Oops!! Something went wrong. Please try again..');
      }
    },
  });
});
