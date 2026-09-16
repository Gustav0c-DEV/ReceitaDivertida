const imageIds = [
  "1533089860892-a7c6f0a88666", "1495214783159-3503fd1b572d", "1525351484163-7529414344d8", "1528207776546-365bb710ee93", "1551183053-bf91a1d81141", "1551892374-ecf8754cf8b0", "1551218808-94e220e084d2", "1473093295043-cdd812d0e601", "1565299624946-b28f40a0ae38", "1556761223-4c4282c73f77", "1504674900247-0877df9cc836", "1498837167922-ddd27525d352", "1490645935967-10de6ba17061", "1512621776951-a57141f2eefd", "1546069901-ba9599a7e63c", "1563379926898-05f4575a45d8", "1571997478779-2adcbbe9ab2f", "1572449043416-55f4685c9bb7", "1540189549336-e6e99c3679fe", "1543353071-10c8ba85a904",
  "1504754524776-8f4f37790ca0", "1482049016688-2d3e1b311543", "1484723091739-30a097e8f929", "1551024506-0bccd828d307", "1547592180-85f173990554", "1515003197210-e0cd71810b5f", "1512058564366-18510be2db19", "1553530666-ba11a7da3888", "1488477181946-6428a0291777", "1601050690597-df0568f70950", "1476718406336-bb5a9690ee2a", "1555949258-eb67b1ef0ceb", "1541592106381-b31e9677c0e5", "1543352634-a1c7e66f34c1", "1543362906-acfc16c67564", "1533777857889-4be7c70b33f7", "1517248135467-4c7edcad34c4", "1521305916504-4a1121188585", "1528712306091-5a2e1d8f0d72", "1552332386-f8dd00dc2f85",
  "1559847844-5315695dadae", "1565958011703-44f9829ba187", "1568901346375-23c9450c58cd", "1571877227200-a0d98ea607e9", "1572448862260-4b2d8b74c6b5", "1573225342350-16731b9a6b2f", "1574484284002-952d92456975", "1580013759032-c96505e4e1e4", "1587314168485-3236d5c9d8b4", "1592924357228-91a4daadcfea", "1598514982901-1fae3a0f4b8b", "1603133872878-684f208fb84b", "1603894584373-5ac82c43b7ab", "1606756790138-838a5d3dc2c4", "1608032364895-8f02f2a6d1aa", "1610614819513-9c6d4f8d3b5e", "1612874742237-4b8f6f1e4b22", "1617694982901-1fae3a0f4b8b", "1625944525533-473f1a8c1c3d", "1626082927389-2f7d5a9e8c1b",
  "1632778149955-8d0a37b7c6e1", "1633504581786-9d3e4f0a6b2c", "1635321593217-40050ad13c7b", "1640717151150-1f9b5e3a7c2d", "1645177628172-a94b4a91d5e3", "1647052730473-2c1e5a7d9b8f", "1651055982367-1f9e6a4c2b8d", "1652270439382-1d4e7f8a5c3b", "1654863404432-8c7a1d5e9b0f", "1655725701750-8e6f6d1d9f4c", "1668234403986-cf5a8e5b1d7c", "1673446581409-87b9e2f1c4d6", "1675596067397-3a6f5d8e1c2b", "1680503147719-1a4c7e9d3b5f", "1680992042818-0a6d4f2b8c1e", "1681515265514-d7a5e3c9b2f0", "1682685797828-2c7b9a5e1d4f", "1684573770548-1d5e8a3c7b9f", "1687146458225-9f3b5d1c7e2a", "1690983323518-4c8a1e6d5b3f",
  "1692401735303-6f1b4d8c2a7e", "1694533193284-0c5e7a9d3b1f", "1696254801839-8b2d4f6a1c7e", "1698847631861-5a3d7f9c2b6e", "1700470431471-2e6b8c4a0d9f", "1703211124516-7c2a5e9b1d4f", "1705147186021-3f8a6c1e5b7d", "1707039334092-9d1f4b7a6c3e", "1708913422499-1e7d5b3c9a4f", "1710622184937-6a2c8e5d1b7f", "1712481630207-4b9e1d7c5a3f", "1714937420973-8d5c2a6f1b7e", "1717247606414-3c7e9a1d5b8f", "1719528168334-5f1b7d3a9c2e", "1721846023975-7a3d9e1c5b6f", "1724198889463-2b8f5d1a7c4e", "1726634298221-9c4a6e2b1d7f", "1728991045317-1f6c8a3e5b9d", "1731307944826-5e2a7c9d1b4f", "1733886141552-8a3d5f1c7e9b"
].map((id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=85`);

const stableImageRefs = [
  "premium_photo-1671377387797-8d3307a546a6", "photo-1515003197210-e0cd71810b5f", "photo-1624715080044-8d9e1e5aa3b2", "photo-1589152144820-692b189e0b34", "premium_photo-1663126351065-741a1d338b5d", "photo-1518779578993-ec3579fee39f", "photo-1545216560-68430ad77342", "photo-1505253758473-96b7015fcd40", "premium_photo-1661587759162-d2dd4934ce33", "photo-1543353071-10c8ba85a904", "photo-1630445396366-8dea03c85ead", "photo-1708987379841-2badb0d3a95a", "premium_photo-1681826951620-daa615b4144e", "photo-1623800849430-13c191263e9f", "photo-1623800849466-435f89f567ce", "photo-1623800849410-04f915273282", "premium_photo-1663126325483-886b1a08ba8e", "photo-1623800850352-270214d332e8", "photo-1594910015880-83c22b9722c4", "photo-1708989173600-dbf8a37205dd",
  "premium_photo-1669742928007-71b99d6ab1dd", "photo-1702234584726-b75901b17702", "photo-1708989176673-e24d34ede8e2", "photo-1645432524603-2a5172479006", "premium_photo-1726711335438-874c82f69f31", "photo-1601702538934-efffab67ab65", "photo-1645432524571-0e469b22e43f", "photo-1645432524528-ae76145f67b0", "premium_photo-1673525279725-1664b7517b71", "photo-1708989177004-eb47b99877f4", "photo-1708989176728-a5c9a3b08fe9", "photo-1627035537702-ddca174d7987", "premium_photo-1726786807362-6f2555166804", "photo-1590701390714-e979c0ccdd1b", "photo-1654828819532-de14593c5552", "photo-1543352634-a1c51d9f1fa7", "premium_photo-1726826611920-8850f4668438", "photo-1575153409612-907131447a36", "photo-1710887869102-36fd5d1f3352", "photo-1606843046080-45bf7a23c39f",
  "premium_photo-1663089153252-31110770d3b7", "photo-1709138948953-0f59c97308c0", "photo-1618153351015-e2f282e09d94", "photo-1498588747262-0f2241707d13", "premium_photo-1661295656763-2db9d94c6a7c", "photo-1589985269035-ab4c827b76e0", "photo-1651802556313-d073828d6755", "photo-1652923833480-2fc5eea72300", "premium_photo-1712508133482-14fffbfeb1d2", "photo-1653368562557-c1cabb2c91c2", "photo-1652113067351-aeedb790505f", "photo-1575835638288-74138ce93c0e", "premium_photo-1667114974940-62934e26be3b", "photo-1654221149399-4d50d6ce336c", "photo-1651802556296-ebe67794330d", "photo-1651802556307-50adcdd44771", "premium_photo-1671377667767-6e75fd6f2802", "photo-1651802555957-6ed7ba8f53e1", "photo-1651802556259-aa8f0d062c9c", "photo-1651802556339-9bcf3369fe7a",
  "premium_photo-1663090689410-d5cf6f2c9120", "photo-1651802556056-e88256678fa1", "photo-1651802556352-ee061cf20900", "premium_photo-1729796193609-865132c7c50a", "photo-1652237542560-c77b79e3fd56", "photo-1652366501407-86ad3ed442fd", "photo-1652281901129-271a4561a6eb", "premium_photo-1726718432343-4c5f02f5af22", "photo-1651802556072-fe8fd378a989", "photo-1651802556273-045a7850a538", "photo-1651802555975-67031cd73dde", "premium_photo-1729540634988-3cb61aac5f19", "photo-1651802556483-3048e4a9d8eb", "photo-1652754529761-34a0d4f5a469", "photo-1653009598143-fbde7ae4d42d", "premium_photo-1665394005441-d377ec768d0a", "photo-1651802555885-c72b256b3e3d", "photo-1651802555977-2e5b92d7e2e6", "photo-1651802556013-22e60a3ff853", "premium_photo-1723464003582-df09ab4ad03d",
  "photo-1651802555938-8b0ecce95295", "photo-1653437488854-71dfead6236e", "photo-1493770348161-369560ae357d", "premium_photo-1663050996179-86096a38569e", "photo-1563865436874-9aef32095fad", "photo-1601315379734-425a469078de", "photo-1626266799007-f85d48ef3f05", "premium_photo-1668543548958-7865de5b9b12", "photo-1651256785548-f1cc03107d8e", "photo-1651256785757-d9e86c38f0e8", "photo-1710091691777-3115088962c4", "premium_photo-1665392923679-2cd4cb467f1e", "photo-1505575967455-40e256f73376", "photo-1759749597775-86547ca37b53", "photo-1651256785590-6a200ecbf64a", "premium_photo-1664476937112-905d1c25760c", "photo-1651256785544-fc012585e6a2", "photo-1711570810963-2a1554410c2b", "photo-1651256785597-4efe48fd71f9", "photo-1551183053-bf91a1d81141"
].map((ref) => `${ref.startsWith("premium_") ? "https://plus.unsplash.com/" : "https://images.unsplash.com/"}${ref}?auto=format&fit=crop&w=900&q=85`);

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
    image: stableImageRefs[id - 1]
  };
}

export const recipes = groups.flatMap(([category, specs]) => specs.map((spec, index) => makeRecipe(spec, category, groups.slice(0, groups.findIndex(([name]) => name === category)).reduce((total, [, items]) => total + items.length, 0) + index + 1, index)));

export function validateRecipeImages(recipeList = recipes) {
  const images = recipeList.map((recipe) => recipe.image);
  const photoKeys = images.map((image) => image?.match(/(?:photo|premium_photo)-[^?]+/)?.[0] || image);
  const duplicates = photoKeys.filter((image, index) => photoKeys.indexOf(image) !== index);
  if (duplicates.length > 0) {
    console.warn("Imagens duplicadas:", [...new Set(duplicates)]);
  }
  return { total: images.length, unique: new Set(photoKeys).size, duplicates: [...new Set(duplicates)] };
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
