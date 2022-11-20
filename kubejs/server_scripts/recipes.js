ServerEvents.recipes((e) => {
  // BEDS
  RecipeManager.remove(e, ["#minecraft:beds"]);
  [
    "blue",
    "gray",
    "red",
    "green",
    "light_gray",
    "yellow",
    "brown",
    "cyan",
    "lime",
    "pink",
    "white",
    "orange",
    "magenta",
    "purple",
    "light_blue",
    "black",
  ].forEach((color) => {
    // crafting
    RecipeManager.addGroup(
      e,
      "vanillaaugratin/minecraft:bed",
      `1x minecraft:${color}_bed`,
      [["WWW", "PPP"]],
      {
        W: { item: `minecraft:${color}_wool` },
        P: { tag: "minecraft:planks" },
      }
    );
    // re-dye
    RecipeManager.addGroup(
      e,
      "vanillaaugratin/minecraft:bed/redye",
      `1x minecraft:${color}_bed`,
      [["#minecraft:beds", `#forge:dyes/${color}`]]
    );
  });

  // CAKE
  RecipeManager.remove(e, ["minecraft:cake"]);
  RecipeManager.addGroup(
    e,
    "vanillaaugratin/minecraft:cake",
    "1x minecraft:cake",
    [
      ["MMM", "SES", "WWW"],
      [" M ", "SES", " D "],
      ["7x farmersdelight:cake_slice"],
    ],
    {
      D: { tag: "forge:dough/wheat" },
      E: { tag: "forge:eggs" },
      M: { tag: "forge:milk" },
      S: { item: "minecraft:sugar" },
      W: { tag: "forge:crops/wheat" },
    }
  );

  // const planks = [
  //   "minecraft:mangrove",
  //   "minecraft:acacia",
  //   "minecraft:spruce",
  //   "minecraft:jungle",
  //   "minecraft:warped",
  //   "minecraft:oak",
  //   "minecraft:dark_oak",
  //   "minecraft:birch",
  //   "minecraft:crimson",
  // ];
  // RecipeManager.fix(
  //   e,
  //   planks.map((id) => {
  //     const objMap = new Map();
  //     const element = id.split(":");
  //     const namespace = element[0];
  //     const elementId = element[1];
  //     objMap.set(`${namespace}:${elementId}_planks`, [
  //       `${namespace}:${elementId}_log`,
  //       `${namespace}:stripped_${elementId}_log`,
  //       `${namespace}:${elementId}_wood`,
  //       `${namespace}:stripped_${elementId}_wood`,
  //     ]);
  //     return objMap;
  //   })
  // );
});
