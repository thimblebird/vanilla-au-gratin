ServerEvents.tags("item", (e) => {
  TagManager.add(e, "vanillaaugratin", "cakes", "placeable", [
    "minecraft:cake",
  ]);

  TagManager.add(e, "vanillaaugratin", "tanks", "fluid", [
    "create:fluid_tank",
    "travelersbackpack:backpack_tank",
  ]);

  TagManager.add(e, "vanillaaugratin", "tanks", "air", [
    "create:copper_backtank",
  ]);

  TagManager.add(e, "vanillaaugratin", "sleepables", [
    "travelersbackpack:sleeping_bag",
    "#minecraft:beds",
  ]);
});
