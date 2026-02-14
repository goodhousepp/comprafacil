(function () {
  const uniq = (arr) => Array.from(new Set(arr.filter(Boolean).map(s => String(s).trim()).filter(Boolean)));
  const addMany = (obj, cat, items) => { obj[cat] = uniq([...(obj[cat] || []), ...items]); };
  const combine = (bases, variants, joiner = " ") => {
    const out = [];
    for (const b of bases) for (const v of variants) out.push(`${b}${joiner}${v}`);
    return out;
  };
  const combine2 = (a, b, c, joiner = " ") => {
    const out = [];
    for (const x of a) for (const y of b) for (const z of c) out.push(`${x}${joiner}${y}${joiner}${z}`);
    return out;
  };

  const C = {};

  addMany(C, "Hortifruti", [
    // BR
    "Abacate","Abacaxi","Abóbora","Acelga","Acerola","Agrião","Alface","Alho","Alho poró","Banana",
    "Batata inglesa","Batata doce","Berinjela","Beterraba","Brócolis","Cebola","Cebolinha","Cenoura",
    "Chuchu","Coentro","Couve","Couve-flor","Espinafre","Gengibre","Hortelã","Laranja","Limão","Maçã",
    "Mamão","Manga","Melancia","Morango","Pepino","Pimentão","Quiabo","Repolho","Rúcula","Tomate","Uva",
    // JP
    "Daikon (大根)","Nasu (なす)","Negi (ねぎ)","Hakusai (白菜)","Moyashi (もやし)","Kabocha (かぼちゃ)",
    "Renkon (れんこん)","Gobo (ごぼう)","Satsumaimo (さつまいも)","Nira (ニラ)","Okra (オクラ)",
    "Shiitake","Enoki","Shimeji","Mikan (みかん)","Yuzu"
  ]);

  addMany(C, "Padaria/Matinais", [
    // BR
    "Pão francês","Pão de forma","Pão integral","Pão de queijo","Bolo","Torrada","Biscoito água e sal",
    "Biscoito maizena","Biscoito integral","Cereal matinal","Granola","Aveia em flocos","Mel","Geleia",
    "Café em pó","Café solúvel","Chá","Achocolatado",
    // JP
    "Shokupan (食パン)","Anpan (あんパン)","Melonpan (メロンパン)","Dorayaki (どら焼き)",
    "Hotcake mix (ホットケーキミックス)","Natto (納豆)","Miso soup instant (味噌汁)"
  ]);

  addMany(C, "Carnes", [
    // BR
    "Carne bovina","Carne moída","Carne suína","Frango inteiro","Peito de frango","Coxa e sobrecoxa",
    "Bacon","Linguiça","Salsicha","Hambúrguer","Ovos","Peixe",
    // JP
    "Salmão (鮭)","Saba (さば)","Sashimi mix","Karaage (唐揚げ)","Yakitori","Gyoza","Chikuwa","Kamaboko",
    "Atum enlatado","Sardinha enlatada"
  ]);

  addMany(C, "Laticínios", [
    "Leite","Leite integral","Leite desnatado","Leite em pó","Iogurte natural","Iogurte sabor","Mussarela",
    "Queijo prato","Queijo ralado","Parmesão","Manteiga","Margarina","Creme de leite","Leite condensado",
    // JP comuns
    "Milk (牛乳)","Yogurt (ヨーグルト)","Cheese slice (スライスチーズ)","Butter (バター)"
  ]);

  addMany(C, "Mercearia", [
    // BR base
    "Arroz","Feijão carioca","Feijão preto","Macarrão espaguete","Macarrão penne","Farinha de trigo","Farinha de mandioca",
    "Açúcar","Açúcar mascavo","Adoçante","Sal","Óleo de soja","Azeite de oliva","Vinagre",
    "Molho de tomate","Extrato de tomate","Maionese","Ketchup","Mostarda","Shoyu",
    "Pipoca","Milho verde","Ervilha","Seleta de legumes","Chocolate","Gelatina","Amido de milho","Fermento químico","Filtro de café",
    "Pimenta do reino","Orégano","Cominho","Colorau","Caldo de carne","Caldo de galinha",
    // JP (Donki / AEON / Gyomu)
    "Arroz japonês (米)","Miso (味噌)","Dashi (だし)","Mirin (みりん)","Sake culinário (料理酒)",
    "Panko (パン粉)","Soba (そば)","Udon (うどん)","Ramen (ラーメン)","Somen (そうめん)",
    "Nori (海苔)","Katsuobushi (鰹節)","Furikake (ふりかけ)","Goma (ごま)","Goma abura (ごま油)",
    "Ponzu (ポン酢)","Tsuyu (つゆ)","Togarashi (七味)","Wasabi","Karashi",
    "Curry roux (カレールー)","Tempura flour (天ぷら粉)","Okonomiyaki sauce","Takoyaki sauce",
    // Costco / comuns
    "Pasta de amendoim","Granola","Azeitona","Atum em lata","Sopa instantânea","Molho barbecue"
  ]);

  addMany(C, "Bebidas", [
    "Água mineral","Água com gás","Água de coco","Refrigerante","Suco","Suco em pó","Isotônico","Energético",
    // JP
    "Chá verde (緑茶)","Oolong (烏龍茶)","Mugi-cha (麦茶)","Calpis (カルピス)","Pocari Sweat","Aquarius",
    "Café enlatado (缶コーヒー)","Água saborizada"
  ]);

  addMany(C, "Limpeza", [
    "Detergente","Desinfetante","Sabão em pó","Sabão em barra","Amaciante","Limpador multiuso","Água sanitária",
    "Esponja de louça","Saco de lixo","Papel toalha","Papel alumínio","Papel filme","Guardanapo",
    // JP
    "Kabi killer (カビキラー)","Kitchen bleach (漂白剤)","Toilet cleaner (トイレ洗剤)","Refil detergente"
  ]);

  addMany(C, "Higiene", [
    "Papel higiênico","Sabonete","Shampoo","Condicionador","Desodorante","Creme dental","Escova de dente","Fio dental",
    "Lenço umedecido","Cotonete","Algodão","Absorvente",
    // JP
    "Body soap (ボディソープ)","Face wash (洗顔)","Mouthwash (マウスウォッシュ)","Mask (マスク)"
  ]);

  addMany(C, "Outros", [
    "Carvão","Ração (pet)","Areia (gato)","Pilha AA","Pilha AAA","Lâmpada","Isqueiro",
    "Saco zip","Filme plástico","Papel manteiga"
  ]);

  // ===== GERADOR de variações (para chegar em 1500+ sem “travadeira”) =====
  const sizesFood = ["200g","300g","400g","500g","700g","1kg","2kg"];
  const sizesDrink = ["250ml","350ml","500ml","1L","1.5L","2L"];
  const flavors = ["tradicional","light","zero","integral","sem açúcar","morango","uva","limão","laranja","chocolate"];
  const typesRice = ["branco","integral","parboilizado","japonês","arbóreo","para sushi"];
  const noodles = ["soba","udon","ramen","somen","yakisoba"];
  const meatsCuts = ["filé","contra-filé","alcatra","patinho","acém","costela","bife","moída"];
  const fishTypes = ["salmão","atum","sardinha","tilápia","bacalhau","saba"];

  addMany(C, "Mercearia", combine(["Arroz"], typesRice));
  addMany(C, "Mercearia", combine(["Macarrão"], ["espaguete","penne","parafuso","talharim","ninho","integral"]));
  addMany(C, "Mercearia", combine(["Farinha"], ["trigo","mandioca","milho","aveia"]));
  addMany(C, "Mercearia", combine(["Molho de tomate"], ["tradicional","manjericão","picante"]));
  addMany(C, "Mercearia", combine(["Shoyu"], ["tradicional","light","reduzido sal"]));
  addMany(C, "Mercearia", combine(["Miso"], ["shiro (branco)","aka (vermelho)","awase (misto)"]));
  addMany(C, "Mercearia", combine(["Dashi"], ["granulado","sachê","kombu","katsuobushi"]));
  addMany(C, "Mercearia", combine(["Furikake (ふりかけ)"], ["salmão","nori","ovo","wasabi","goma"]));
  addMany(C, "Mercearia", combine(["Curry roux (カレールー)"], ["suave","médio","picante"]));
  addMany(C, "Mercearia", combine(["Macarrão japonês"], noodles));

  addMany(C, "Bebidas", combine(["Água mineral"], sizesDrink));
  addMany(C, "Bebidas", combine(["Refrigerante"], sizesDrink));
  addMany(C, "Bebidas", combine(["Suco"], sizesDrink));
  addMany(C, "Bebidas", combine(["Chá verde (緑茶)"], sizesDrink));
  addMany(C, "Bebidas", combine(["Oolong (烏龍茶)"], sizesDrink));
  addMany(C, "Bebidas", combine(["Pocari Sweat"], sizesDrink));
  addMany(C, "Bebidas", combine(["Calpis (カルピス)"], sizesDrink));

  addMany(C, "Laticínios", combine(["Iogurte"], ["natural","grego","morango","uva","pêssego","mix frutas"]));
  addMany(C, "Laticínios", combine(["Leite"], ["integral","semi-desnatado","desnatado","sem lactose"]));
  addMany(C, "Laticínios", combine(["Queijo"], ["mussarela","prato","cheddar","parmesão","cream cheese"]));

  addMany(C, "Carnes", combine(["Carne bovina"], meatsCuts));
  addMany(C, "Carnes", combine(["Carne suína"], ["lombo","pernil","costelinha","bisteca"]));
  addMany(C, "Carnes", combine(["Frango"], ["peito","coxa","sobrecoxa","asa","filé"]));
  addMany(C, "Carnes", combine(["Peixe"], fishTypes));
  addMany(C, "Carnes", combine(["Ovos"], ["branco","vermelho","caipira","10 un","20 un"]));

  addMany(C, "Hortifruti", combine(["Maçã"], ["fuji","gala","verde"]));
  addMany(C, "Hortifruti", combine(["Tomate"], ["italiano","cereja","salada"]));
  addMany(C, "Hortifruti", combine(["Banana"], ["nanica","prata","maçã"]));
  addMany(C, "Hortifruti", combine(["Cebola"], ["branca","roxa"]));
  addMany(C, "Hortifruti", combine(["Pimentão"], ["verde","vermelho","amarelo"]));
  addMany(C, "Hortifruti", combine(["Shiitake"], ["fresco","seco"]));

  addMany(C, "Padaria/Matinais", combine(["Pão de forma"], ["tradicional","integral","sem casca"]));
  addMany(C, "Padaria/Matinais", combine(["Biscoito"], ["água e sal","maizena","integral","recheado"]));
  addMany(C, "Padaria/Matinais", combine(["Café"], ["em pó","solúvel","cápsulas"]));
  addMany(C, "Padaria/Matinais", combine(["Chá"], ["camomila","hortelã","preto","verde","mate"]));
  addMany(C, "Padaria/Matinais", combine(["Natto (納豆)"], ["1 pack","3 packs"]));
  addMany(C, "Padaria/Matinais", combine(["Miso soup instant (味噌汁)"], ["wakame","tofu","asari"]));

  addMany(C, "Limpeza", combine(["Detergente"], ["neutro","limão","maçã"]));
  addMany(C, "Limpeza", combine(["Sabão em pó"], sizesFood));
  addMany(C, "Limpeza", combine(["Saco de lixo"], ["20L","30L","45L","70L","90L"]));
  addMany(C, "Limpeza", combine(["Papel toalha"], ["1 rolo","2 rolos","4 rolos","6 rolos"]));
  addMany(C, "Limpeza", combine(["Kabi killer (カビキラー)"], ["spray","refil"]));

  addMany(C, "Higiene", combine(["Shampoo"], flavors));
  addMany(C, "Higiene", combine(["Condicionador"], flavors));
  addMany(C, "Higiene", combine(["Creme dental"], ["menta","branqueador","sensível"]));
  addMany(C, "Higiene", combine(["Papel higiênico"], ["4 rolos","8 rolos","12 rolos","24 rolos"]));
  addMany(C, "Higiene", combine(["Mask (マスク)"], ["30 un","50 un"]));

  addMany(C, "Mercearia", combine2(["Onigiri"], ["salmão","atum maionese","kombu","ume"], ["1 un","3 un"]));

  // Ajuste final de volume (mais variações úteis)
  addMany(C, "Mercearia", combine(["Arroz","Feijão carioca","Feijão preto","Farinha de trigo","Panko (パン粉)","Nori (海苔)"], sizesFood));
  addMany(C, "Bebidas", combine(["Água mineral","Refrigerante","Suco","Chá verde (緑茶)","Oolong (烏龍茶)"], sizesDrink));

  // limpar duplicados
  for (const k of Object.keys(C)) C[k] = uniq(C[k]);

  window.CATALOG = C;
})();
