/* =====================================================================
   BEEDY WORTH COLLECTIONS: SITE DATA
   Everything you may want to edit later lives in this one file.

   1) CONFIG ........ contact numbers, currency rates, production timeline text
   2) CATALOG ....... the four sections and every style card inside them

   HOW TO CHANGE A STYLE
     - image .......... path to the photo (or just replace the file with the same name)
     - title .......... heading shown in the pop-up
     - description .... the 3-4 line text in the pop-up (the card shows a shortened version)
     - price .......... STARTING BID price in Naira (numbers only, no commas or symbols)
     - availability ... one of 100, 70, 50, 30, 10  (drives the production timeline bar)

   HOW TO ADD A NEW STYLE
     Copy any { ... } style block inside a section's "styles" list, paste it at the
     end of that list (remember the comma between blocks) and edit its fields.
   ===================================================================== */

window.BWC_CONFIG = {
  brandName: "Beedy Worth Collections",

  /* Shown in every pop-up. "wa" is the number with country code and no + or spaces. */
  whatsappNumbers: [
    { display: "+234 810 193 1989", wa: "2348101931989" },
    { display: "+234 802 398 5993", wa: "2348023985993" }
  ],
  phone: { display: "+234 810 193 1989", tel: "+2348101931989" },

  /* Naira is the default display currency. */
  currency: {
    default: "NGN",
    /* Fallback exchange rates: how many Naira equal 1 unit of each currency.
       The site also tries to fetch live rates when a visitor opens it; these
       numbers are used if that fails. Update them now and then. */
    rates: { USD: 1400, EUR: 1750, GBP: 2000 },
    useLiveRates: true
  },

  /* Production timeline: edit the wording here if your schedule ever changes. */
  availability: {
    100: { label: "100% Availability", time: "5–10 working days" },
    70:  { label: "70% Availability",  time: "10–13 working days" },
    50:  { label: "50% Availability",  time: "15–18 working days" },
    30:  { label: "30% Availability",  time: "20–25 working days" },
    10:  { label: "10% Availability",  time: "25–30 working days" }
  }
};

window.BWC_CATALOG = [
  {
    id: "adire",
    name: "Adire",
    intro: "Indigo-dyed and resist-patterned cloth rooted in Yoruba tradition, cut into dresses and gowns made for today.",
    styles: [
      {
        id: "adire-01",
        title: "Elegant Blue Marble Maxi",
        image: "adire-01.jpg",
        description: "A flowing masterpiece with a collared neckline, puff sleeves, and a tiered skirt. Its marbled blue-and-white design radiates sophistication, perfect for both casual chic and evening elegance.",
        price: 45000,
        availability: 70
      },
      {
        id: "adire-02",
        title: "Earth-Tone Royalty Dress",
        image: "adire-02.jpg",
        description: "Rich reddish-brown fabric adorned with bold blue geometric motifs, cinched at the waist with a matching belt. A regal piece that blends tradition with modern flair, ideal for statement occasions.",
        price: 50000,
        availability: 70
      },
      {
        id: "adire-03",
        title: "Classic Tie-Dye Peplum Gown",
        image: "adire-03.jpg",
        description: "A timeless blue-and-white gown with peplum detailing and a flared skirt. Paired with gold sandals, this design balances cultural artistry with contemporary elegance.",
        price: 55000,
        availability: 100
      },
      {
        id: "adire-04",
        title: "Green Majesty Kaftan",
        image: "adire-04.jpg",
        description: "A flowing kaftan with leaf-inspired motifs and a matching headwrap. Lightweight and regal, it’s the perfect blend of comfort and cultural pride.",
        price: 40000,
        availability: 50
      },
      {
        id: "adire-05",
        title: "Chic Peplum Tie-Dye Set",
        image: "adire-05.jpg",
        description: "A fitted top with peplum waist paired with a flared skirt, crafted in striking blue-and-white tie-dye. Accessorized with gold accents, this look is effortlessly stylish.",
        price: 60000,
        availability: 100
      },
      {
        id: "adire-06",
        title: "Mustard Geometric Jumpsuit",
        image: "adire-06.jpg",
        description: "Bold yet refined, this mustard-yellow jumpsuit features crisp geometric patterns and wide-leg comfort. A modern statement piece for confident fashion lovers.",
        price: 45000,
        availability: 50
      },
      {
        id: "adire-07",
        title: "Purple Royal Ensemble",
        image: "adire-07.jpg",
        description: "A vibrant tie-dye top with voluminous sleeves paired with striped trousers and a matching headwrap. A cultural showstopper that celebrates heritage with flair.",
        price: 50000,
        availability: 70
      },
      {
        id: "adire-08",
        title: "Vibrant Floral Elegance",
        image: "adire-08.jpg",
        description: "A halter-neck gown bursting with yellow, red, and green star-like motifs. Flowing fabric and golden accessories make this a radiant choice for glamorous evenings.",
        price: 65000,
        availability: 100
      },
      {
        id: "adire-09",
        title: "Green Harmony Co-Ord Set",
        image: "adire-09.jpg",
        description: "A relaxed yet stylish two-piece with floral geometric prints, wide-legged pants, and a gathered neckline. Perfect for modern sophistication with cultural roots.",
        price: 55000,
        availability: 50
      },
      {
        id: "adire-10",
        title: "Plaid & Tie-Dye Fusion",
        image: "adire-10.jpg",
        description: "A daring mix of structured plaid and artistic tie-dye. The cropped shirt and slit skirt combo redefine contemporary African fashion with bold contrasts.",
        price: 50000,
        availability: 70
      },
      {
        id: "adire-11",
        title: "Radiant Sunset Kaftan",
        image: "adire-11.jpg",
        description: "A vibrant tie-dye gown in fiery shades of red, orange, and blue, detailed with elegant embroidery and a matching headwrap. This piece exudes cultural richness and timeless beauty.",
        price: 55000,
        availability: 70
      },
      {
        id: "adire-12",
        title: "Bold Crimson Geometry Gown",
        image: "adire-12.jpg",
        description: "Flowing elegance meets striking design in this red-and-white geometric patterned gown. With wide sleeves and a voluminous silhouette, it’s perfect for making a grand entrance.",
        price: 65000,
        availability: 100
      },
      {
        id: "adire-13",
        title: "Orange Glow Tie-Dye Dress",
        image: "adire-13.jpg",
        description: "A radiant long dress with circular tie-dye motifs, paired with a matching headwrap and chic accessories. This look blends cultural artistry with modern sophistication.",
        price: 50000,
        availability: 50
      },
      {
        id: "adire-14",
        title: "Corridor Elegance Ensemble",
        image: "adire-14.jpg",
        description: "A flowing orange-and-white tie-dye garment with a matching headscarf, styled with bold accessories. Effortlessly chic, it’s a statement of confidence and tradition.",
        price: 45000,
        availability: 30
      },
      {
        id: "adire-15",
        title: "Earth-Tone Bohemian Set",
        image: "adire-15.jpg",
        description: "A ruched V-neck top paired with wide-leg pants in earthy tie-dye tones. This ensemble radiates bohemian charm with a touch of cultural artistry.",
        price: 60000,
        availability: 70
      },
      {
        id: "adire-16",
        title: "Orange Radiance Kaftan",
        image: "adire-16.jpg",
        description: "A flowing tie-dye kaftan in bold orange and white, complete with a matching headwrap. A vibrant piece that celebrates tradition with modern flair.",
        price: 50000,
        availability: 50
      },
      {
        id: "adire-17",
        title: "Green Harmony Two-Piece",
        image: "adire-17.jpg",
        description: "A coordinated green patterned top and skirt with geometric motifs. Relaxed yet stylish, this outfit is perfect for cultural gatherings and everyday elegance.",
        price: 45000,
        availability: 50
      },
      {
        id: "adire-18",
        title: "Artistic Fusion Set",
        image: "adire-18.jpg",
        description: "A multi-colored tie-dye ensemble with ruched detailing and flowing pants. Bold, artistic, and dramatic, this look is made for fashion lovers who dare to stand out.",
        price: 65000,
        availability: 100
      },
      {
        id: "adire-19",
        title: "Cultural Mosaic Kaftan",
        image: "adire-19.jpg",
        description: "A colorful kaftan with abstract motifs in warm tones, layered over sleek black pants. A striking blend of tradition and contemporary artistry.",
        price: 55000,
        availability: 70
      },
      {
        id: "adire-20",
        title: "Regal Ankara Elegance",
        image: "adire-20.jpg",
        description: "A fitted Ankara dress with a flowing outer robe and crochet cuffs, paired with a matching headwrap. A regal design that embodies grace and cultural pride.",
        price: 70000,
        availability: 100
      },
      {
        id: "adire-21",
        title: "Midnight Blue Majesty",
        image: "adire-21.jpg",
        description: "A richly patterned blue-and-black ensemble with embroidery and beadwork, complete with a matching headwrap. Sophisticated and timeless, it’s a true showpiece.",
        price: 75000,
        availability: 100
      },
      {
        id: "adire-22",
        title: "Crimson Royal Flow",
        image: "adire-22.jpg",
        description: "A red-and-white patterned gown with wide sleeves and a fitted waist, accessorized with matching jewelry. A bold and elegant choice for cultural celebrations.",
        price: 65000,
        availability: 70
      },
      {
        id: "adire-23",
        title: "Blue Blossom Couture Gown",
        image: "adire-23.jpg",
        description: "A dramatic tie-dye gown with ruffled draping and a floral shoulder detail, paired with elegant white accessories. A couture masterpiece for evening glamour.",
        price: 85000,
        availability: 100
      },
      {
        id: "adire-24",
        title: "Indigo Drama Blouse",
        image: "adire-24.jpg",
        description: "A deep V-neck blouse in striking blue-and-white tie-dye, featuring voluminous sleeves and a fitted silhouette. Modern, bold, and effortlessly stylish.",
        price: 45000,
        availability: 50
      },
      {
        id: "adire-25",
        title: "Teal Bubble Elegance",
        image: "adire-25.jpg",
        description: "A sculptural teal-and-white tie-dye dress with a bubble skirt and asymmetrical overlay. A creative fusion of tradition and avant-garde fashion.",
        price: 80000,
        availability: 100
      }
    ]
  },
  {
    id: "iro-buba",
    name: "Iro & Buba",
    intro: "The classic wrapper-and-blouse pairing, styled in woven strips, bold prints and rich ceremonial colour.",
    styles: [
      {
        id: "iro-buba-01",
        title: "Crimson & Sapphire Velvet Iro-Buba",
        image: "iro-buba-01.jpg",
        description: "Command presence in this luxurious red velvet buba paired with a striking blue and red striped iro. The dramatic, statement gele and matching shoulder sash elevate this traditional ensemble to high-fashion royalty. Perfect for weddings and prestigious cultural events.",
        price: 150000,
        availability: 70
      },
      {
        id: "iro-buba-02",
        title: "Floral Peplum Ankara & Lace Set",
        image: "iro-buba-02.jpg",
        description: "A beautiful blend of structured Ankara and delicate lace. This fitted peplum buba flatters the waist, while the flowing purple lace sash adds an elegant, feminine touch. Complete with a matching gele for a sophisticated, highly tailored look.",
        price: 95000,
        availability: 60
      },
      {
        id: "iro-buba-03",
        title: "Indigo Adire Classic Iro-Buba",
        image: "iro-buba-03.jpg",
        description: "Celebrate rich heritage with this stunning indigo adire iro-buba set. The relaxed fit and fringed shoulder sash offer a chic, comfortable silhouette, beautifully complemented by a towering matching gele. A timeless piece for cultural celebrations.",
        price: 75000,
        availability: 30
      },
      {
        id: "iro-buba-04",
        title: "Navy Geometric Wrap Iro-Buba",
        image: "iro-buba-04.jpg",
        description: "Effortless elegance defines this navy patterned iro-buba. Featuring a flattering wrap-style bodice and wide sleeves, this piece moves beautifully with every step. Paired with a classic gele, it's an ideal choice for stylish daytime events.",
        price: 85000,
        availability: 40
      },
      {
        id: "iro-buba-05",
        title: "Royal Burgundy Aso-Oke Set",
        image: "iro-buba-05.jpg",
        description: "Exude regal elegance in this meticulously woven burgundy and gold aso-oke ensemble. The structured buba and statement shoulder sash provide a majestic silhouette, making it the ultimate choice for traditional weddings and milestone celebrations.",
        price: 160000,
        availability: 70
      },
      {
        id: "iro-buba-06",
        title: "Azure Flared-Sleeve Statement Set",
        image: "iro-buba-06.jpg",
        description: "Modern artistry meets traditional silhouettes. This powder blue set features striking printed flared sleeves that command attention, cinched at the waist for a flawless fit. A bold, contemporary take on the classic iro-buba.",
        price: 110000,
        availability: 60
      },
      {
        id: "iro-buba-07",
        title: "Cobalt Botanical Longline Set",
        image: "iro-buba-07.jpg",
        description: "Striking cobalt blue botanical prints bring this elegant iro-buba to life. The long, fitted sleeves and floor-sweeping skirt offer a modest yet incredibly chic look, finished perfectly with a matching headwrap. A versatile staple for any wardrobe.",
        price: 90000,
        availability: 40
      },
      {
        id: "iro-buba-08",
        title: "Burnt Orange & Chocolate Stripe Set",
        image: "iro-buba-08.jpg",
        description: "A vibrant and warm combination of burnt orange eyelet lace and rich chocolate striped fabric. The matching gele and draped shoulder sash create a polished, culturally rich ensemble. Perfect for making a vibrant statement at any occasion.",
        price: 120000,
        availability: 50
      },
      {
        id: "iro-buba-09",
        title: "Vibrant Coral Striped Mini Set",
        image: "iro-buba-09.jpg",
        description: "A youthful and bold twist on tradition. This mini-length iro-buba features striking coral and black stripes, styled with layers of traditional coral beads and a dramatic gele. A fierce, standout choice for vibrant celebrations.",
        price: 85000,
        availability: 40
      },
      {
        id: "iro-buba-10",
        title: "Indigo Tie-Dye Fitted Midi Set",
        image: "iro-buba-10.jpg",
        description: "Showcasing the beauty of traditional adire, this navy and white set features a flattering square neckline and a fitted midi skirt. Complete with a matching gele and statement accessories, it’s a sophisticated take on a classic textile.",
        price: 80000,
        availability: 30
      },
      {
        id: "iro-buba-11",
        title: "Radiant Orange Beaded Corset Set",
        image: "iro-buba-11.jpg",
        description: "A breathtaking fusion of modern bridal elegance and traditional flair. This ensemble features a heavily beaded white corset top with sheer lace sleeves, beautifully paired with a vibrant orange and black star-patterned wrapper. The striking red gele adds a bold, celebratory finish.",
        price: 145000,
        availability: 80
      },
      {
        id: "iro-buba-12",
        title: "Midnight Polka Dot Adire Set",
        image: "iro-buba-12.jpg",
        description: "Effortless sophistication meets playful charm. This dark, polka-dot patterned buba and iro set offers a relaxed yet tailored fit, beautifully complemented by a classic black headwrap. It's a versatile, chic choice for any elegant daytime or evening occasion.",
        price: 85000,
        availability: 40
      },
      {
        id: "iro-buba-13",
        title: "Kaleidoscope Multi-Stripe Aso-Oke",
        image: "iro-buba-13.jpg",
        description: "Celebrate in a burst of color with this stunning multi-striped ensemble. The beautifully tailored buba and fitted iro are perfectly matched with a dramatic shoulder sash and towering gele. A vibrant masterpiece designed to make you the center of attention at any owambe.",
        price: 120000,
        availability: 60
      },
      {
        id: "iro-buba-14",
        title: "Burgundy Fringe & Sunset Stripe Set",
        image: "iro-buba-14.jpg",
        description: "A textural delight for the modern traditional woman. This deep burgundy fringe buba is elegantly paired with a warm-toned striped iro. Styled with a striking gold gele and a matching drape, it exudes a rich, sophisticated charm perfect for high-profile events.",
        price: 125000,
        availability: 50
      },
      {
        id: "iro-buba-15",
        title: "Vibrant Paisley Mini Iro-Buba",
        image: "iro-buba-15.jpg",
        description: "Fierce, youthful, and utterly captivating. This short iro-buba features a bold pink and blue paisley-inspired print, tailored into a flattering fitted top and a chic mini wrap skirt with a dramatic side drape. Complete with a matching statement gele, it's a show-stopping look.",
        price: 100000,
        availability: 60
      },
      {
        id: "iro-buba-16",
        title: "Cobalt Stripe Mini Set",
        image: "iro-buba-16.jpg",
        description: "Sleek and contemporary, this royal blue ensemble redefines traditional fashion. The solid blue buba top contrasts beautifully with the textured, lighter blue striped mini iro. Finished with a matching gele and sash, it's an effortlessly polished choice.",
        price: 90000,
        availability: 40
      },
      {
        id: "iro-buba-17",
        title: "Sky Blue Floral Adire Set",
        image: "iro-buba-17.jpg",
        description: "Breathe fresh air into your wardrobe with this stunning light blue floral ensemble. Featuring a gracefully draped sash and wide sleeves, the hand-painted aesthetic of the fabric gives it a unique, artistic flair. Perfect for elegant daytime celebrations.",
        price: 85000,
        availability: 30
      },
      {
        id: "iro-buba-18",
        title: "Emerald & Gold Royal Aso-Oke",
        image: "iro-buba-18.jpg",
        description: "Exude pure royalty in this majestic emerald green and gold Aso-Oke set. The impeccably tailored buba and iro, paired with a sweeping shoulder sash and a magnificent gele, create a silhouette of power and grace. The ultimate statement piece for the mother of the bride.",
        price: 160000,
        availability: 70
      },
      {
        id: "iro-buba-19",
        title: "Indigo Geometric Adire Set",
        image: "iro-buba-19.jpg",
        description: "A celebration of rich cultural heritage. This deep indigo Adire set features intricate geometric grid patterns, tailored into a flattering bell-sleeve buba and a fitted midi iro. The matching headwrap completes this sophisticated, timeless look.",
        price: 80000,
        availability: 40
      },
      {
        id: "iro-buba-20",
        title: "Midnight Metallic Stripe Set",
        image: "iro-buba-20.jpg",
        description: "Modern glamour meets traditional silhouette. This striking black set features shimmering silver metallic diagonal stripes that catch the light beautifully. With its flowing bell sleeves and fitted iro, it’s a sophisticated choice for evening events.",
        price: 105000,
        availability: 50
      },
      {
        id: "iro-buba-21",
        title: "Rustic Earth-Tone Wrap Set",
        image: "iro-buba-21.jpg",
        description: "Effortless, earthy, and incredibly chic. This rust-colored buba features a subtle dotted pattern and a relaxed fit, paired with a beautifully wrapped iro that ties at the waist. It’s a comfortable, stylish staple for any culturally inspired wardrobe.",
        price: 75000,
        availability: 30
      },
      {
        id: "iro-buba-22",
        title: "Crisp White & Mint Stripe Mini",
        image: "iro-buba-22.jpg",
        description: "A refreshing and youthful take on the classic iro-buba. This set pairs a textured white buba top with a vibrant green and white striped mini iro. Finished with a matching green headwrap, it’s a playful, standout look for daytime festivities.",
        price: 85000,
        availability: 40
      },
      {
        id: "iro-buba-23",
        title: "Sunshine Eyelet Ankara Set",
        image: "iro-buba-23.jpg",
        description: "A vibrant explosion of color and texture. This stunning Ankara set features intricate yellow eyelet lace detailing on the dramatic sleeves and hem, perfectly framing the rich floral print. Complete with a matching gele, it's a joyful masterpiece for any celebration.",
        price: 120000,
        availability: 70
      },
      {
        id: "iro-buba-24",
        title: "Majestic Cobalt & Silver Sash Set",
        image: "iro-buba-24.jpg",
        description: "Timeless elegance at its finest. This solid royal blue buba and iro set is elevated by a striking, wide shoulder sash featuring a bold silver metallic stripe. Styled with a large matching gele and traditional coral beads, it is the epitome of regal beauty.",
        price: 130000,
        availability: 50
      },
      {
        id: "iro-buba-25",
        title: "Ruby Textured & Monochrome Stripe Set",
        image: "iro-buba-25.jpg",
        description: "Make a striking statement in this beautiful two-tone iro-buba ensemble. The vibrant ruby-red textured buba with delicate eyelet detailing contrasts flawlessly with the bold black and white striped iro and shoulder sash. Complete with a towering, perfectly tied matching gele, this look effortlessly blends rich cultural heritage with modern sophistication.",
        price: 115000,
        availability: 50
      }
    ]
  },
  {
    id: "kaftan-gowns",
    name: "Kaftan Gowns",
    intro: "Loose, flowing silhouettes with generous sleeves, made to move gracefully and feel effortless to wear.",
    styles: [
      {
        id: "kaftan-gowns-01",
        title: "Royal Sapphire Geometric Kaftan",
        image: "kaftan-gowns-01.jpg",
        description: "Make a bold statement in this striking sapphire blue and gold kaftan. Featuring an intricate geometric print that flows gracefully, this piece offers unmatched comfort and effortless elegance. Perfect for cultural events or sophisticated soirées, complete with a matching headwrap to elevate your look.",
        price: 85000,
        availability: 30
      },
      {
        id: "kaftan-gowns-02",
        title: "Fuchsia Abstract Statement Maxi",
        image: "kaftan-gowns-02.jpg",
        description: "Turn heads with this vibrant fuchsia and silver abstract print maxi. The structured shoulder detailing and flowing silhouette create a perfect balance of modern chic and timeless allure. Crafted for the woman who isn't afraid to stand out, this dress is a masterpiece for high-fashion moments.",
        price: 95000,
        availability: 50
      },
      {
        id: "kaftan-gowns-03",
        title: "Burgundy & Emerald Striped Kaftan",
        image: "kaftan-gowns-03.jpg",
        description: "Rich, earthy tones meet contemporary design in this burgundy and emerald striped kaftan. The deep V-neckline and oversized patch pockets add a touch of modern functionality to the luxurious, flowing fabric. A sophisticated choice for the discerning woman seeking comfort without compromising on style.",
        price: 75000,
        availability: 40
      },
      {
        id: "kaftan-gowns-04",
        title: "Monochrome Aztec One-Shoulder Kaftan",
        image: "kaftan-gowns-04.jpg",
        description: "Exude sophisticated drama in this geometric monochrome kaftan. Featuring a striking one-shoulder silhouette with a contrasting black sash and a daring front slit, this piece beautifully merges traditional prints with modern couture. Ideal for exclusive events where elegance is paramount.",
        price: 110000,
        availability: 70
      },
      {
        id: "kaftan-gowns-05",
        title: "Golden Teal Brocade Royal Gown",
        image: "kaftan-gowns-05.jpg",
        description: "Step into luxury with this breathtaking gold and teal brocade gown. The structured sleeves and flattering V-neckline, accented by a delicate fringe bodice, create a regal silhouette. This opulent piece is meticulously designed for the mother of the bride or the ultimate VIP guest at any high-end occasion.",
        price: 150000,
        availability: 80
      },
      {
        id: "kaftan-gowns-06",
        title: "Sunset Wave Belted Maxi Dress",
        image: "kaftan-gowns-06.jpg",
        description: "Radiate warmth in this stunning sunset-orange wave patterned maxi. Featuring a cinched waist with a matching belt and a beautifully flowing skirt, this dress flatters every curve. It's the perfect ensemble for a luxurious resort getaway or an elegant daytime event.",
        price: 90000,
        availability: 40
      },
      {
        id: "kaftan-gowns-07",
        title: "Bronze Feather Bell-Sleeve Kaftan",
        image: "kaftan-gowns-07.jpg",
        description: "Drape yourself in elegance with this bronze and blue feather-patterned kaftan. The dramatic bell sleeves and front slit add a touch of theatrical glamour to the rich, shimmering fabric. Complete with a matching headwrap, it’s a show-stopping piece for any festive celebration.",
        price: 120000,
        availability: 60
      },
      {
        id: "kaftan-gowns-08",
        title: "Navy Striped & Checkered Kaftan",
        image: "kaftan-gowns-08.jpg",
        description: "Elevate your everyday luxury with this navy and white striped kaftan. Featuring a collared neckline and bold black geometric accents, this piece offers a relaxed yet polished look. Perfect for effortless day-to-night styling, blending ultimate comfort with chic modern design.",
        price: 65000,
        availability: 30
      },
      {
        id: "kaftan-gowns-09",
        title: "Rose & Emerald Color-Block Kaftan",
        image: "kaftan-gowns-09.jpg",
        description: "Make a breathtaking entrance in this dusty rose and emerald color-block kaftan. The striking zigzag waistline is delicately accentuated with sparkling beadwork, flowing into a richly textured green skirt. It's a masterful blend of traditional elegance and contemporary color-blocking.",
        price: 105000,
        availability: 70
      },
      {
        id: "kaftan-gowns-10",
        title: "Shimmering Bronze Lace-Detail Kaftan",
        image: "kaftan-gowns-10.jpg",
        description: "Dazzle in this shimmering bronze and blue kaftan, designed for the spotlight. It features a vibrant blue lace V-neckline and a dramatic gathered side detail cascading into a delicate lace train. This opulent ensemble is the epitome of glamorous evening wear.",
        price: 135000,
        availability: 65
      },
      {
        id: "kaftan-gowns-11",
        title: "Olive Satin Asymmetrical Cape Gown",
        image: "kaftan-gowns-11.jpg",
        description: "Drape yourself in luxury with this sophisticated olive green gown. Featuring a lustrous satin asymmetrical cape overlay that flows beautifully over a contrasting patterned skirt, this piece is the epitome of modern elegance. Perfect for high-society events and elegant evening dinners.",
        price: 115000,
        availability: 60
      },
      {
        id: "kaftan-gowns-12",
        title: "Forest Green Button-Down Kaftan",
        image: "kaftan-gowns-12.jpg",
        description: "Embrace minimalist chic with this stunning forest green kaftan. The clean, flowing silhouette is beautifully contrasted by a tailored button-down front placket and a sharp V-neckline. Complete with a matching headwrap, it offers modest sophistication for the discerning woman.",
        price: 80000,
        availability: 30
      },
      {
        id: "kaftan-gowns-13",
        title: "Sunset Abstract Lace-Yoke Kaftan",
        image: "kaftan-gowns-13.jpg",
        description: "Radiate vibrant energy in this striking red and yellow abstract print kaftan. The breezy, relaxed fit is elevated by a beautifully intricate white lace yoke that frames the neckline. It is the perfect statement piece for a luxurious resort getaway or a stylish daytime outing.",
        price: 75000,
        availability: 40
      },
      {
        id: "kaftan-gowns-14",
        title: "Ivory Color-Block Stripe Maxi",
        image: "kaftan-gowns-14.jpg",
        description: "Redefine modern elegance with this ivory textured maxi dress. Featuring a bold, multi-colored horizontal stripe panel near the hem, this minimalist piece offers a stunning architectural silhouette. Breathable, comfortable, and effortlessly chic for the contemporary woman.",
        price: 90000,
        availability: 50
      },
      {
        id: "kaftan-gowns-15",
        title: "Sunburst Tie-Dye Embroidered Kaftan",
        image: "kaftan-gowns-15.jpg",
        description: "Brighten up any room in this vibrant yellow and white tie-dye kaftan. It features a beautifully detailed central embroidered motif and a playful tassel detail, perfectly complemented by a matching headwrap. A joyful, culturally rich piece ideal for festive celebrations.",
        price: 85000,
        availability: 40
      },
      {
        id: "kaftan-gowns-16",
        title: "Earthy Geometric Panel Kaftan",
        image: "kaftan-gowns-16.jpg",
        description: "Celebrate rich heritage with this brown and white geometric print kaftan. The striking solid brown V-neck yoke adds a modern, structured contrast to the flowing, culturally inspired fabric. Complete with a side slit and matching headwrap for a flawless, elegant look.",
        price: 80000,
        availability: 30
      },
      {
        id: "kaftan-gowns-17",
        title: "Midnight Dotted Stripe Kaftan",
        image: "kaftan-gowns-17.jpg",
        description: "Sophistication meets ultimate comfort in this classic black kaftan. Featuring elegant vertical stripes crafted from delicate white dots, this piece offers a universally flattering V-neckline and a flowing silhouette. A versatile staple that transitions effortlessly from day to night.",
        price: 85000,
        availability: 30
      },
      {
        id: "kaftan-gowns-18",
        title: "Golden Ankara Geometric Mix Gown",
        image: "kaftan-gowns-18.jpg",
        description: "Make a breathtaking statement in this vibrant Ankara-inspired gown. The golden yellow bodice, featuring bold green motifs, seamlessly transitions into a rich, dark green geometric skirt. With its tailored collar and short sleeves, it’s a masterclass in print mixing and modern African fashion.",
        price: 95000,
        availability: 60
      },
      {
        id: "kaftan-gowns-19",
        title: "Regal Gold Brocade Structured Gown",
        image: "kaftan-gowns-19.jpg",
        description: "Command attention in this majestic gold and white brocade gown. The structured shoulders and elegant button-down front exude power and luxury, while the matching gold headwrap completes the regal look. The ultimate statement piece for high-profile events and weddings.",
        price: 140000,
        availability: 70
      },
      {
        id: "kaftan-gowns-20",
        title: "Lemon Abstract Gold-Trimmed Kaftan",
        image: "kaftan-gowns-20.jpg",
        description: "Brighten your wardrobe with this cheerful lemon and white abstract print kaftan. Delicate gold trim meticulously outlines the neckline, front seam, and pockets, adding a touch of opulent detailing to a relaxed silhouette. A refreshing and elegant choice for any daytime occasion.",
        price: 95000,
        availability: 50
      },
      {
        id: "kaftan-gowns-21",
        title: "Hot Pink Patterned Flare Gown",
        image: "kaftan-gowns-21.jpg",
        description: "Step out in vibrant confidence with this hot pink statement gown. The dramatic, sweeping sleeves and hem are beautifully contrasted with a delicate circular pattern, while the off-shoulder design adds a touch of modern romance. This look is completed with a stunning, sculptural matching headpiece.",
        price: 110000,
        availability: 60
      },
      {
        id: "kaftan-gowns-22",
        title: "Amethyst Textured Jacquard Gown",
        image: "kaftan-gowns-22.jpg",
        description: "Exude pure royalty in this stunning amethyst purple jacquard gown. The rich, textured fabric catches the light beautifully, while the gathered silhouette and wide sleeves offer a flattering, luxurious fit. Complete with a matching headwrap, it's an opulent choice for special occasions.",
        price: 125000,
        availability: 50
      },
      {
        id: "kaftan-gowns-23",
        title: "Tribal Print Button-Front Kaftan",
        image: "kaftan-gowns-23.jpg",
        description: "A harmonious blend of tribal aesthetics and modern tailoring. This brown and white patterned kaftan features a striking beige placket detailed with rustic buttons, offering a chic, structured look. The matching headwrap and elegant side slit make it perfect for the modern bohemian.",
        price: 80000,
        availability: 40
      },
      {
        id: "kaftan-gowns-24",
        title: "Mocha Geometric Off-Shoulder Maxi",
        image: "kaftan-gowns-24.jpg",
        description: "Effortless elegance meets bold geometry. This mocha-toned maxi features a chic off-shoulder neckline and dramatic, flowing sleeves, perfect for creating a striking silhouette. The subtle geometric print adds a layer of modern sophistication, making it a versatile wardrobe essential.",
        price: 90000,
        availability: 40
      },
      {
        id: "kaftan-gowns-25",
        title: "Blush & Turquoise Ombre Print Gown",
        image: "kaftan-gowns-25.jpg",
        description: "A breathtaking fusion of color and artistic print. This gown features a soft blush pink bodice that transitions into a vibrant turquoise patterned yoke and wide sleeves, with matching detailing at the hem. It is a true wearable work of art for the woman who loves to stand out.",
        price: 120000,
        availability: 60
      }
    ]
  },
  {
    id: "custom-apparels",
    name: "Custom Apparels",
    intro: "Designed around you: share your idea, fabric and measurements, and we shape them into a one-of-a-kind outfit.",
    styles: [
      {
        id: "custom-apparels-01",
        title: "Scarlet Swirl Elegance",
        image: "custom-apparels-01.jpg",
        description: "A radiant red gown with silver beadwork and sheer embellished sleeves. This luxurious piece is crafted for sophistication and timeless glamour.",
        price: 120000,
        availability: 10
      },
      {
        id: "custom-apparels-02",
        title: "Royal Blue Lace Majesty",
        image: "custom-apparels-02.jpg",
        description: "A dazzling blue lace blouse with structured sleeves, paired with a navy wrapper and a grand gele. A regal ensemble that embodies cultural pride.",
        price: 95000,
        availability: 10
      },
      {
        id: "custom-apparels-03",
        title: "Burgundy Grandeur Set",
        image: "custom-apparels-03.jpg",
        description: "A black beaded corset top with a richly embroidered burgundy wrapper and layered gele. Bold and elegant, perfect for ceremonial occasions.",
        price: 110000,
        availability: 10
      },
      {
        id: "custom-apparels-04",
        title: "Purple Floral Royalty",
        image: "custom-apparels-04.jpg",
        description: "A richly embroidered purple dress with turquoise and pink floral appliqués, styled with a pink gele and luxury clutch. A statement of elegance and artistry.",
        price: 130000,
        availability: 10
      },
      {
        id: "custom-apparels-05",
        title: "Golden Flame Couture",
        image: "custom-apparels-05.jpg",
        description: "A dramatic orange gown with gold sequins, sheer sleeves, and ruffled shoulders. Luxurious and bold, designed for unforgettable entrances.",
        price: 150000,
        availability: 10
      },
      {
        id: "custom-apparels-06",
        title: "Golden Heritage Ensemble",
        image: "custom-apparels-06.jpg",
        description: "A richly detailed golden dress with sequins and embroidery, paired with a grand gele and clutch. A timeless piece of cultural luxury.",
        price: 140000,
        availability: 10
      },
      {
        id: "custom-apparels-07",
        title: "Bronze Radiance Outfit",
        image: "custom-apparels-07.jpg",
        description: "A fitted corset-style top with sequined wrapper and matching gele. Elegant and modern, this ensemble balances tradition with contemporary flair.",
        price: 90000,
        availability: 30
      },
      {
        id: "custom-apparels-08",
        title: "Brown Lace Elegance",
        image: "custom-apparels-08.jpg",
        description: "A brown lace blouse with embroidery paired with a floral wrapper and striped gele. A graceful blend of tradition and modern sophistication.",
        price: 85000,
        availability: 50
      },
      {
        id: "custom-apparels-09",
        title: "Golden Majesty Couture",
        image: "custom-apparels-09.jpg",
        description: "A black and gold beaded corset top with a golden wrapper and grand gele. A luxurious ensemble that celebrates heritage with opulence.",
        price: 135000,
        availability: 10
      },
      {
        id: "custom-apparels-10",
        title: "Royal Blue Glamour Gown",
        image: "custom-apparels-10.jpg",
        description: "An off-shoulder royal blue gown with sequins, beadwork, and sheer draping. A sophisticated design for elegant evenings and cultural celebrations.",
        price: 125000,
        availability: 10
      },
      {
        id: "custom-apparels-11",
        title: "Golden Ember Elegance",
        image: "custom-apparels-11.jpg",
        description: "A radiant orange gown adorned with shimmering gold beadwork and sheer embroidered sleeves. This masterpiece exudes luxury and refined craftsmanship, perfect for grand occasions.",
        price: 140000,
        availability: 10
      },
      {
        id: "custom-apparels-12",
        title: "Purple Lace Royalty",
        image: "custom-apparels-12.jpg",
        description: "A purple lace blouse paired with a matching skirt, styled with a silver gele and beaded clutch. Rich textures and intricate detailing make this ensemble a cultural gem.",
        price: 95000,
        availability: 30
      },
      {
        id: "custom-apparels-13",
        title: "Blush Pink Glamour Gown",
        image: "custom-apparels-13.jpg",
        description: "A floor-length pink lace gown with floral appliqués, sequins, and a mermaid hem. Elegant from every angle, it’s a showstopper for weddings and formal celebrations.",
        price: 150000,
        availability: 100
      },
      {
        id: "custom-apparels-14",
        title: "Crimson Tassel Elegance",
        image: "custom-apparels-14.jpg",
        description: "A fitted red gown with off-shoulder lace detailing, tassel sleeves, and a matching gele. Sophisticated and bold, this design radiates cultural pride.",
        price: 120000,
        availability: 10
      },
      {
        id: "custom-apparels-15",
        title: "Pink Blossom Heritage",
        image: "custom-apparels-15.jpg",
        description: "A fitted pink dress with puffed sleeves, beadwork, and embroidery, styled with a matching gele. A graceful blend of tradition and artistry.",
        price: 100000,
        availability: 30
      },
      {
        id: "custom-apparels-16",
        title: "Violet Majesty Couture",
        image: "custom-apparels-16.jpg",
        description: "A purple gown with floral embellishments, pleated bodice, and dramatic fabric accents. Artistic and regal, it’s designed for unforgettable entrances.",
        price: 130000,
        availability: 10
      },
      {
        id: "custom-apparels-17",
        title: "Olive Gold Heritage Set",
        image: "custom-apparels-17.jpg",
        description: "A gold and olive lace blouse with beadwork, paired with a layered green gele and coral bead accessories. A timeless ensemble of cultural elegance.",
        price: 140000,
        availability: 10
      },
      {
        id: "custom-apparels-18",
        title: "Royal Violet Glamour",
        image: "custom-apparels-18.jpg",
        description: "A fitted purple gown with beadwork, puffed sleeves, and a matching gele. Paired with a clutch, this ceremonial attire radiates elegance and pride.",
        price: 125000,
        availability: 10
      },
      {
        id: "custom-apparels-19",
        title: "Emerald Luxe Gown",
        image: "custom-apparels-19.jpg",
        description: "A floor-length green gown with beadwork, structured sleeves, and an off-shoulder neckline. Luxurious and refined, perfect for high-style occasions.",
        price: 150000,
        availability: 10
      },
      {
        id: "custom-apparels-20",
        title: "Mustard Gold Radiance",
        image: "custom-apparels-20.jpg",
        description: "A mustard lace outfit with floral patterns, styled with a golden gele and clutch. Elegant and vibrant, it’s a celebration of cultural craftsmanship.",
        price: 110000,
        availability: 30
      },
      {
        id: "custom-apparels-21",
        title: "Lime Green Sparkle",
        image: "custom-apparels-21.jpg",
        description: "A fitted lime-green gown with beadwork and silver fringes on the shoulders. Vibrant and dazzling, it’s a bold choice for festive elegance.",
        price: 115000,
        availability: 30
      },
      {
        id: "custom-apparels-22",
        title: "Dark Green Velvet Majesty",
        image: "custom-apparels-22.jpg",
        description: "A richly textured green gown with velvet bodice, embellished sleeves, and floral appliqué. Paired with a matching gele, it’s a regal statement of luxury.",
        price: 135000,
        availability: 10
      },
      {
        id: "custom-apparels-23",
        title: "Golden Lace Heritage",
        image: "custom-apparels-23.jpg",
        description: "A fitted gold lace dress with long sleeves, styled with a shiny gele. Elegant and timeless, this outfit celebrates cultural craftsmanship.",
        price: 120000,
        availability: 30
      },
      {
        id: "custom-apparels-24",
        title: "Turquoise Sparkling Elegance",
        image: "custom-apparels-24.jpg",
        description: "A shimmering turquoise and silver gown with beadwork, paired with a metallic gele and matching fan. A glamorous ensemble for grand celebrations.",
        price: 145000,
        availability: 10
      },
      {
        id: "custom-apparels-25",
        title: "Emerald Celebration Couture",
        image: "custom-apparels-25.jpg",
        description: "A vibrant emerald green lace gown with leaf embroidery, styled with a matching gele and feathered handbag. Perfect for weddings and cultural festivities.",
        price: 150000,
        availability: 10
      }
    ]
  }
];
