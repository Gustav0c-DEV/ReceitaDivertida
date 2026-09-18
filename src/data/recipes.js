import imageMap from "./recipes/IMAGE-MAP.json";

const localImages = import.meta.glob("./recipes/*.jpg", { eager: true, query: "?url", import: "default" });
const imageById = new Map(
  imageMap.map((entry) => [
    entry.id,
    { ...entry, image: localImages[`./recipes/${entry.localFile}`] }
  ])
);

const templates = {
  pancake: (main) => ({ ingredients: [`1 xícara de farinha de trigo`, `1 ${main}`, "1 ovo", "1/2 xícara de leite"], steps: ["Misture os ingredientes até formar uma massa uniforme.", "Aqueça uma frigideira em fogo baixo.", "Coloque uma porção da massa.", "Doure dos dois lados e sirva."] }),
  egg: (main) => ({ ingredients: [`2 ovos`, `1/2 xícara de ${main}`, "1 colher de azeite", "Sal a gosto"], steps: ["Bata os ovos com o sal.", `Adicione ${main} e misture.`, "Aqueça o azeite em uma frigideira.", "Cozinhe até firmar e dobre ao meio."] }),
  porridge: (main) => ({ ingredients: [`1/2 xícara de aveia`, `1 xícara de leite`, `1 porção de ${main}`, "Canela opcional"], steps: ["Coloque a aveia e o leite em uma panela.", "Cozinhe em fogo baixo mexendo devagar.", `Adicione ${main}.`, "Cozinhe até ficar cremoso e sirva."] }),
  tapioca: (main) => ({ ingredients: ["3 colheres de goma de tapioca", `1/2 xícara de ${main}`, "Sal a gosto"], steps: ["Aqueça uma frigideira antiaderente.", "Espalhe a goma formando um disco.", `Adicione ${main} sobre a massa.`, "Dobre a tapioca e aqueça por mais um minuto."] }),
  bread: (main) => ({ ingredients: [`2 fatias de pão`, `1 porção de ${main}`, "1 colher de azeite"], steps: ["Aqueça o pão em uma frigideira ou torradeira.", `Prepare ${main}.`, "Monte as fatias com o recheio.", "Sirva ainda morno."] }),
  couscous: (main) => ({ ingredients: ["1 xícara de flocos de milho", "1/2 xícara de água", `1 porção de ${main}`, "Sal a gosto"], steps: ["Misture os flocos com água e sal.", "Deixe hidratar por cinco minutos.", "Cozinhe no vapor por dez minutos.", `Sirva com ${main}.`] }),
  rice: (main) => ({ ingredients: ["1 xícara de arroz", "2 xícaras de água", `150 g de ${main}`, "Sal a gosto"], steps: ["Refogue o arroz rapidamente.", "Adicione a água e o sal.", `Prepare ${main} em outra panela.`, "Misture ou sirva junto quando o arroz estiver macio."] }),
  pasta: (main) => ({ ingredients: ["200 g de macarrão", `150 g de ${main}`, "1 colher de azeite", "Sal a gosto"], steps: ["Cozinhe o macarrão até ficar macio.", `Prepare ${main} em uma panela.`, "Escorra o macarrão.", "Misture tudo e sirva."] }),
  chicken: (main) => ({ ingredients: [`150 g de frango`, `1 porção de ${main}`, "1 colher de azeite", "Sal e ervas suaves"], steps: ["Tempere o frango com sal e ervas.", "Aqueça o azeite.", "Cozinhe o frango até ficar bem cozido.", `Sirva com ${main}.`] }),
  beef: (main) => ({ ingredients: [`150 g de carne moída`, `1 porção de ${main}`, "1 colher de azeite", "Sal a gosto"], steps: ["Aqueça o azeite e refogue a carne.", `Adicione ${main}.`, "Cozinhe até os ingredientes ficarem macios.", "Ajuste o sal e sirva."] }),
  fish: (main) => ({ ingredients: [`1 filé de peixe`, `1 porção de ${main}`, "1 colher de azeite", "Sal e limão"], steps: ["Tempere o peixe com sal e limão.", "Aqueça o azeite.", "Asse ou grelhe o peixe até cozinhar.", `Sirva com ${main}.`] }),
  soup: (main) => ({ ingredients: [`2 xícaras de ${main}`, "2 xícaras de água", "1 colher de azeite", "Sal a gosto"], steps: [`Coloque ${main} e a água em uma panela.`, "Cozinhe até os ingredientes amaciarem.", "Bata ou amasse conforme a textura desejada.", "Ajuste o sal e sirva morno."] }),
  salad: (main) => ({ ingredients: [`2 xícaras de ${main}`, "1 colher de azeite", "Suco de limão", "Sal a gosto"], steps: [`Higienize e corte ${main}.`, "Coloque tudo em uma tigela.", "Tempere com azeite, limão e sal.", "Misture delicadamente e sirva."] }),
  sandwich: (main) => ({ ingredients: ["2 fatias de pão", `1 porção de ${main}`, "Folhas macias", "1 colher de requeijão"], steps: ["Passe o requeijão no pão.", `Adicione ${main}.`, "Junte as folhas.", "Feche o sanduíche e corte ao meio."] }),
  cake: (main) => ({ ingredients: [`1 xícara de ${main}`, "1 ovo", "1/2 xícara de farinha", "2 colheres de açúcar"], steps: [`Amasse ou prepare ${main}.`, "Misture com o ovo, a farinha e o açúcar.", "Coloque em uma forma pequena.", "Asse até dourar e deixe esfriar."] }),
  savoryCake: (main) => ({ ingredients: [`1 xícara de ${main}`, "2 ovos", "1/2 xícara de farinha", "Sal a gosto"], steps: [`Prepare ${main}.`, "Misture com os ovos, a farinha e o sal.", "Coloque em uma forma pequena untada.", "Asse até firmar e dourar."] }),
  fruit: (main) => ({ ingredients: [`1 xícara de ${main}`, "Canela opcional", "1 colher de aveia"], steps: [`Higienize e corte ${main}.`, "Coloque em uma tigela.", "Adicione a aveia e a canela.", "Sirva na temperatura desejada."] }),
  smoothie: (main) => ({ ingredients: [`1 xícara de ${main}`, "200 ml de leite ou água", "Gelo opcional"], steps: [`Coloque ${main} no liquidificador.`, "Adicione o líquido.", "Bata até ficar uniforme.", "Sirva imediatamente."] }),
  juice: (main) => ({ ingredients: [`2 unidades de ${main}`, "200 ml de água", "Gelo opcional"], steps: [`Higienize e corte ${main}.`, "Bata com a água.", "Coe se desejar.", "Sirva imediatamente."] }),
  dessert: (main) => ({ ingredients: [`1 porção de ${main}`, "1/2 xícara de leite", "1 colher de açúcar", "Canela opcional"], steps: [`Prepare ${main}.`, "Misture com o leite e o açúcar.", "Leve à geladeira ou ao forno conforme a receita.", "Sirva depois de atingir a temperatura adequada."] })
};

const breakfast = [
  ["Panqueca de Banana", 15, "Fácil", "Macia", "Suave", "Morna", ["Sem lactose", "Sabor suave"], "banana madura", "pancake"],
  ["Panqueca de Maçã e Canela", 18, "Fácil", "Macia", "Suave", "Morna", ["Sabor suave"], "maçã picada", "pancake"],
  ["Omelete de Queijo", 10, "Muito fácil", "Macia", "Moderado", "Quente", ["Poucos ingredientes"], "queijo", "egg"],
  ["Omelete de Legumes", 15, "Fácil", "Macia", "Moderado", "Quente", ["Sem glúten"], "legumes picados", "egg"],
  ["Mingau de Aveia com Banana", 10, "Muito fácil", "Cremosa", "Suave", "Morna", ["Sabor suave"], "banana", "porridge"],
  ["Mingau de Fubá", 15, "Fácil", "Cremosa", "Suave", "Morna", ["Poucos ingredientes"], "fubá", "porridge"],
  ["Tapioca com Queijo", 10, "Muito fácil", "Macia", "Moderado", "Morna", ["Sem glúten"], "queijo", "tapioca"],
  ["Tapioca com Frango", 18, "Fácil", "Macia", "Suave", "Morna", ["Sem glúten"], "frango desfiado", "tapioca"],
  ["Crepioca de Tomate", 15, "Fácil", "Macia", "Moderado", "Morna", ["Sem glúten"], "tomate e queijo", "egg"],
  ["Pão com Ovo", 10, "Muito fácil", "Macia", "Suave", "Quente", ["Poucos ingredientes"], "ovo", "bread"],
  ["Pão Integral com Ricota", 8, "Muito fácil", "Macia", "Suave", "Fria", ["Sabor suave"], "ricota temperada", "bread"],
  ["Cuscuz com Ovo", 20, "Fácil", "Macia", "Suave", "Quente", ["Sem lactose"], "ovo mexido", "couscous"],
  ["Cuscuz com Banana", 15, "Fácil", "Macia", "Suave", "Morna", ["Sem lactose", "Sabor suave"], "banana fatiada", "couscous"],
  ["Iogurte com Granola", 5, "Muito fácil", "Cremosa", "Moderado", "Fria", ["Sem lactose"], "iogurte e granola", "fruit"],
  ["Aveia de Geladeira com Morango", 8, "Muito fácil", "Cremosa", "Suave", "Fria", ["Sem lactose", "Sabor suave"], "aveia e morango", "porridge"],
  ["Torrada com Abacate", 8, "Muito fácil", "Cremosa", "Moderado", "Morna", ["Vegetariana"], "abacate", "bread"],
  ["Pão de Queijo de Frigideira", 12, "Fácil", "Macia", "Moderado", "Quente", ["Sem glúten"], "polvilho e queijo", "pancake"],
  ["Bolo de Milho de Caneca", 12, "Fácil", "Macia", "Suave", "Morna", ["Poucos ingredientes"], "milho", "cake"],
  ["Bowl de Frutas com Aveia", 7, "Muito fácil", "Macia", "Suave", "Fria", ["Sem lactose", "Sabor suave"], "frutas variadas", "fruit"],
  ["Wrap de Café da Manhã", 15, "Fácil", "Macia", "Moderado", "Morna", ["Poucos ingredientes"], "ovo e queijo", "sandwich"]
];

const lunch = [
  ["Arroz com Frango", 30, "Fácil", "Macia", "Suave", "Quente", ["Sabor suave", "Sem lactose"], "frango", "rice"],
  ["Macarrão com Carne Moída", 30, "Fácil", "Macia", "Moderado", "Quente", ["Poucos ingredientes"], "carne moída", "pasta"],
  ["Frango Grelhado com Batata", 35, "Fácil", "Macia", "Suave", "Quente", ["Sem lactose"], "batata cozida", "chicken"],
  ["Escondidinho de Frango", 45, "Médio", "Cremosa", "Suave", "Quente", ["Sabor suave"], "purê e frango", "chicken"],
  ["Purê com Carne Moída", 35, "Fácil", "Cremosa", "Moderado", "Quente", ["Poucos ingredientes"], "purê de batata", "beef"],
  ["Arroz com Legumes", 25, "Fácil", "Macia", "Suave", "Quente", ["Vegetariana", "Sem lactose"], "legumes", "rice"],
  ["Almôndegas ao Molho", 40, "Médio", "Macia", "Moderado", "Quente", ["Poucos ingredientes"], "molho de tomate", "beef"],
  ["Peixe Assado com Batata", 35, "Fácil", "Macia", "Suave", "Quente", ["Sem lactose"], "batata", "fish"],
  ["Lasanha de Frango", 55, "Médio", "Cremosa", "Moderado", "Quente", ["Sabor suave"], "frango e molho branco", "pasta"],
  ["Risoto de Abóbora", 40, "Médio", "Cremosa", "Suave", "Quente", ["Vegetariana", "Sabor suave"], "abóbora", "rice"],
  ["Bife Acebolado com Arroz", 30, "Fácil", "Macia", "Moderado", "Quente", ["Poucos ingredientes"], "bife e cebola", "beef"],
  ["Frango Desfiado com Milho", 25, "Fácil", "Macia", "Suave", "Quente", ["Sem lactose"], "milho", "chicken"],
  ["Nhoque de Batata ao Sugo", 45, "Médio", "Macia", "Moderado", "Quente", ["Vegetariana"], "molho de tomate", "pasta"],
  ["Macarrão de Panela Única", 25, "Fácil", "Cremosa", "Suave", "Quente", ["Poucos ingredientes"], "tomate e queijo", "pasta"],
  ["Torta Salgada de Legumes", 50, "Médio", "Macia", "Suave", "Quente", ["Vegetariana"], "legumes", "savoryCake"],
  ["Quibe de Forno", 50, "Médio", "Macia", "Moderado", "Quente", ["Sem lactose"], "carne e trigo", "beef"],
  ["Frango ao Molho de Laranja", 35, "Médio", "Macia", "Moderado", "Quente", ["Sem lactose"], "laranja", "chicken"],
  ["Tilápia com Arroz de Coco", 35, "Fácil", "Macia", "Suave", "Quente", ["Sem glúten"], "arroz de coco", "fish"],
  ["Lentilha com Arroz", 35, "Fácil", "Cremosa", "Suave", "Quente", ["Vegetariana", "Sem lactose"], "lentilha", "rice"],
  ["Omelete Recheada com Arroz", 20, "Fácil", "Macia", "Moderado", "Quente", ["Sem glúten"], "ovo e legumes", "egg"],
  ["Polenta com Molho de Carne", 45, "Médio", "Cremosa", "Moderado", "Quente", ["Sem glúten"], "fubá e carne", "beef"],
  ["Bowl de Frango e Batata-Doce", 35, "Fácil", "Macia", "Suave", "Quente", ["Sem glúten", "Sem lactose"], "batata-doce", "chicken"],
  ["Arroz de Forno com Queijo", 35, "Fácil", "Macia", "Moderado", "Quente", ["Vegetariana"], "queijo e legumes", "rice"],
  ["Panqueca Salgada de Carne", 40, "Médio", "Macia", "Moderado", "Quente", ["Poucos ingredientes"], "carne moída", "pancake"],
  ["Salada Morna de Grão-de-Bico", 25, "Fácil", "Macia", "Suave", "Morna", ["Vegetariana", "Sem lactose"], "grão-de-bico e legumes", "salad"]
];

const snacks = [
  ["Sanduíche Natural de Frango", 15, "Fácil", "Macia", "Suave", "Fria", ["Sabor suave"], "frango desfiado", "sandwich"],
  ["Sanduíche de Queijo e Tomate", 10, "Muito fácil", "Macia", "Moderado", "Morna", ["Vegetariana"], "queijo e tomate", "sandwich"],
  ["Bolo de Banana", 45, "Fácil", "Macia", "Suave", "Morna", ["Sabor suave"], "banana", "cake"],
  ["Muffin de Maçã", 30, "Fácil", "Macia", "Suave", "Morna", ["Sabor suave"], "maçã", "cake"],
  ["Pão de Queijo Assado", 30, "Fácil", "Macia", "Moderado", "Morna", ["Sem glúten"], "polvilho e queijo", "savoryCake"],
  ["Palitos de Cenoura com Homus", 15, "Fácil", "Crocante", "Suave", "Fria", ["Vegetariana", "Sem lactose"], "cenoura e grão-de-bico", "salad"],
  ["Cookies de Aveia", 25, "Fácil", "Crocante", "Suave", "Morna", ["Sabor suave"], "aveia e banana", "cake"],
  ["Tapioca de Banana", 12, "Muito fácil", "Macia", "Suave", "Morna", ["Sem glúten"], "banana e canela", "tapioca"],
  ["Iogurte com Manga", 5, "Muito fácil", "Cremosa", "Suave", "Fria", ["Sem lactose"], "manga", "fruit"],
  ["Maçã Assada", 25, "Muito fácil", "Macia", "Suave", "Morna", ["Sem glúten", "Sem lactose"], "maçã", "fruit"],
  ["Pipoca Caseira", 10, "Muito fácil", "Crocante", "Moderado", "Morna", ["Sem lactose", "Poucos ingredientes"], "milho para pipoca", "bread"],
  ["Bolinho de Arroz", 25, "Fácil", "Crocante", "Moderado", "Morna", ["Poucos ingredientes"], "arroz cozido", "savoryCake"],
  ["Creme de Abacate", 8, "Muito fácil", "Cremosa", "Suave", "Fria", ["Vegetariana", "Sem lactose"], "abacate", "fruit"],
  ["Torrada com Pasta de Grão-de-Bico", 12, "Fácil", "Crocante", "Suave", "Morna", ["Vegetariana"], "grão-de-bico", "bread"],
  ["Panquequinha de Aveia", 15, "Fácil", "Macia", "Suave", "Morna", ["Sem lactose"], "aveia e banana", "pancake"],
  ["Wrap de Atum", 15, "Muito fácil", "Macia", "Moderado", "Fria", ["Poucos ingredientes"], "atum e cenoura", "sandwich"],
  ["Frutas com Pasta de Amendoim", 7, "Muito fácil", "Cremosa", "Moderado", "Fria", ["Sem glúten", "Sem lactose"], "frutas", "fruit"],
  ["Muffin de Cenoura", 35, "Fácil", "Macia", "Suave", "Morna", ["Sabor suave"], "cenoura", "cake"],
  ["Pão na Chapa com Requeijão", 8, "Muito fácil", "Crocante", "Moderado", "Morna", ["Poucos ingredientes"], "requeijão", "bread"],
  ["Biscoito de Polvilho", 30, "Fácil", "Crocante", "Suave", "Morna", ["Sem glúten"], "polvilho", "cake"]
];

const dinner = [
  ["Sopa de Legumes", 35, "Fácil", "Cremosa", "Suave", "Quente", ["Vegetariana", "Sem lactose"], "legumes variados", "soup"],
  ["Creme de Batata", 30, "Fácil", "Cremosa", "Suave", "Quente", ["Poucos ingredientes"], "batata", "soup"],
  ["Omelete de Forno", 25, "Fácil", "Macia", "Moderado", "Quente", ["Sem glúten"], "ovos e legumes", "egg"],
  ["Arroz Cremoso com Frango", 30, "Fácil", "Cremosa", "Suave", "Quente", ["Sabor suave"], "frango", "rice"],
  ["Macarrão com Molho de Tomate", 25, "Muito fácil", "Macia", "Moderado", "Quente", ["Vegetariana", "Poucos ingredientes"], "tomate", "pasta"],
  ["Purê de Batata com Legumes", 25, "Fácil", "Cremosa", "Suave", "Quente", ["Vegetariana", "Sem lactose"], "legumes", "soup"],
  ["Panqueca Salgada de Queijo", 25, "Fácil", "Macia", "Moderado", "Quente", ["Vegetariana"], "queijo", "pancake"],
  ["Sopa de Frango com Arroz", 35, "Fácil", "Líquida", "Suave", "Quente", ["Sabor suave"], "frango e arroz", "soup"],
  ["Caldo de Abóbora", 30, "Fácil", "Cremosa", "Suave", "Quente", ["Vegetariana", "Sem lactose"], "abóbora", "soup"],
  ["Arroz com Ovo e Legumes", 20, "Muito fácil", "Macia", "Moderado", "Quente", ["Poucos ingredientes"], "ovo e legumes", "rice"],
  ["Batata Recheada com Frango", 40, "Fácil", "Macia", "Suave", "Quente", ["Sem glúten"], "frango", "chicken"],
  ["Cuscuz Paulista de Legumes", 40, "Médio", "Macia", "Moderado", "Morna", ["Vegetariana"], "legumes", "couscous"],
  ["Suflê de Cenoura", 35, "Médio", "Macia", "Suave", "Quente", ["Vegetariana"], "cenoura e queijo", "savoryCake"],
  ["Salada de Frango Morna", 25, "Fácil", "Macia", "Suave", "Morna", ["Sem lactose"], "frango e folhas", "salad"],
  ["Quinoa com Legumes", 25, "Fácil", "Macia", "Suave", "Morna", ["Vegetariana", "Sem glúten"], "quinoa e legumes", "rice"],
  ["Creme de Mandioquinha", 35, "Fácil", "Cremosa", "Suave", "Quente", ["Vegetariana", "Poucos ingredientes"], "mandioquinha", "soup"],
  ["Escondidinho de Carne", 45, "Médio", "Cremosa", "Moderado", "Quente", ["Sabor suave"], "carne e batata", "beef"],
  ["Legumes Assados com Queijo", 35, "Fácil", "Macia", "Moderado", "Quente", ["Vegetariana", "Sem glúten"], "legumes", "salad"],
  ["Caldo de Feijão", 35, "Fácil", "Líquida", "Moderado", "Quente", ["Sem lactose"], "feijão", "soup"],
  ["Torta de Frango de Liquidificador", 50, "Médio", "Macia", "Suave", "Quente", ["Sabor suave"], "frango", "savoryCake"]
];

const beverages = [
  ["Vitamina de Banana", 5, "Muito fácil", "Líquida", "Suave", "Fria", ["Sem lactose", "Sabor suave"], "banana", "smoothie"],
  ["Vitamina de Morango", 5, "Muito fácil", "Líquida", "Suave", "Fria", ["Sem lactose"], "morangos", "smoothie"],
  ["Suco de Laranja", 5, "Muito fácil", "Líquida", "Intenso", "Fria", ["Sem glúten", "Sem lactose"], "laranja", "juice"],
  ["Suco de Maçã", 8, "Muito fácil", "Líquida", "Suave", "Fria", ["Sem glúten", "Sem lactose"], "maçã", "juice"],
  ["Suco de Melancia", 5, "Muito fácil", "Líquida", "Suave", "Fria", ["Sem glúten", "Sem lactose"], "melancia", "juice"],
  ["Smoothie de Manga", 8, "Muito fácil", "Cremosa", "Moderado", "Fria", ["Sem lactose"], "manga", "smoothie"],
  ["Leite com Cacau", 5, "Muito fácil", "Líquida", "Moderado", "Morna", ["Poucos ingredientes"], "cacau", "smoothie"],
  ["Água Aromatizada com Limão", 5, "Muito fácil", "Líquida", "Suave", "Fria", ["Sem açúcar", "Sem glúten"], "limão e hortelã", "juice"],
  ["Chá de Maçã e Canela", 10, "Muito fácil", "Líquida", "Suave", "Morna", ["Sem açúcar", "Sem lactose"], "maçã e canela", "juice"],
  ["Café com Leite", 5, "Muito fácil", "Líquida", "Intenso", "Quente", ["Poucos ingredientes"], "café e leite", "smoothie"]
];

const desserts = [
  ["Pudim de Leite", 70, "Médio", "Cremosa", "Moderado", "Fria", ["Sem glúten"], "leite e ovos", "dessert"],
  ["Mousse de Maracujá", 20, "Fácil", "Cremosa", "Intenso", "Fria", ["Sem glúten"], "maracujá", "dessert"],
  ["Gelatina com Frutas", 15, "Muito fácil", "Cremosa", "Suave", "Fria", ["Sem lactose", "Sem glúten"], "gelatina e frutas", "dessert"],
  ["Banana Assada com Canela", 25, "Muito fácil", "Macia", "Suave", "Morna", ["Sem glúten", "Sem lactose"], "banana", "dessert"],
  ["Creme de Frutas", 12, "Muito fácil", "Cremosa", "Suave", "Fria", ["Sem lactose", "Sem glúten"], "frutas variadas", "dessert"]
];

const groups = [
  ["Café da manhã", breakfast],
  ["Almoço", lunch],
  ["Lanche", snacks],
  ["Jantar", dinner],
  ["Bebidas", beverages],
  ["Sobremesas", desserts]
];

function makeRecipe(spec, category, id, categoryIndex) {
  const [title, time, difficulty, texture, flavor, temperature, tags, main, kind] = spec;
  const prepared = templates[kind](main);
  return {
    id,
    title,
    description: `${title} com preparo simples e textura ${texture.toLowerCase()}.`,
    category,
    time,
    difficulty,
    texture,
    tags,
    ingredients: prepared.ingredients,
    steps: prepared.steps,
    sensoryProfile: { flavor, texture, temperature },
    ingredientsCount: prepared.ingredients.length,
    prepDifficulty: difficulty,
    temperature,
    image: imageById.get(id)?.image
  };
}

export const recipes = groups.flatMap(([category, specs]) => specs.map((spec, index) => makeRecipe(spec, category, groups.slice(0, groups.findIndex(([name]) => name === category)).reduce((total, [, items]) => total + items.length, 0) + index + 1, index)));

export function validateRecipeImages(recipeList = recipes) {
  const images = recipeList.map((recipe) => recipe.image);
  const ids = recipeList.map((recipe) => recipe.id);
  const duplicates = images.filter((image, index) => images.indexOf(image) !== index && image !== undefined);
  const missingMappings = recipeList
    .filter((recipe) => !imageById.has(recipe.id))
    .map((recipe) => ({ id: recipe.id, title: recipe.title }));
  const mismatchedMappings = recipeList
    .filter((recipe) => imageById.get(recipe.id)?.recipe !== recipe.title)
    .map((recipe) => ({ id: recipe.id, title: recipe.title, mappedRecipe: imageById.get(recipe.id)?.recipe }));
  const missingLocalFiles = [...imageById.values()]
    .filter((entry) => !entry.image)
    .map((entry) => ({ id: entry.id, title: entry.recipe, path: entry.localFile }));

  if (recipeList.length !== 100 || new Set(ids).size !== 100 || imageMap.length !== 100 || missingMappings.length || mismatchedMappings.length || missingLocalFiles.length) {
    throw new Error("O mapeamento local das imagens não corresponde exatamente às 100 receitas.");
  }

  return {
    total: recipeList.length,
    mapped: images.filter(Boolean).length,
    unique: new Set(images).size,
    duplicates: [...new Set(duplicates)],
    missingMappings,
    mismatchedMappings,
    missingLocalFiles,
    externalUrls: images.filter((image) => /^https?:\/\//i.test(image))
  };
}

if (import.meta.env?.DEV) {
  validateRecipeImages();
}

export const categories = ["Todas", "Café da manhã", "Almoço", "Lanche", "Jantar", "Bebidas", "Sobremesas"];
export const textures = ["Todas", "Macia", "Cremosa", "Crocante", "Líquida"];
export const mealOptions = ["Café da manhã", "Almoço", "Lanche", "Jantar"];
export const mealSchedule = [
  { name: "Café da manhã", time: "08:00" },
  { name: "Almoço", time: "12:00" },
  { name: "Lanche", time: "15:30" },
  { name: "Jantar", time: "19:00" }
];
export const weekDays = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
export const categoryOptions = categories;
export const textureOptions = textures;
export const restrictionOptions = ["Sem glúten", "Sem lactose", "Sem açúcar", "Vegetariana"];
export const preferenceOptions = ["Sabor suave", "Poucos ingredientes", "Quente", "Fria"];
export const sensoryOptions = ["Textura macia", "Textura cremosa", "Textura crocante", "Textura líquida", "Sabor suave", "Poucos ingredientes"];
