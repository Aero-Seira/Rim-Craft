ServerEvents.recipes(e => {
  e.recipes.kubejs.shapeless("alexsmobs:mosquito_repellent_stew", [
    "minecraft:bowl",
    "festival_delicacies:artemisia_argyi",
    "2x neapolitan:roasted_adzuki_beans"
  ]).id("createdelight:mosquito_repellent_stew_from_artemisia_argyi");

  e.recipes.kubejs.shapeless(
    'alexsmobs:kangaroo_burger',
    [
      'some_assembly_required:burger_bun',
      "2x #alexsdelight:cooked_kangaroo",
      "#forge:salad_ingredients/cabbage",
      "minecraft:carrot"
    ]
  ).id("createdelight:kangaroo_burger")
  remove_recipes_id(e, [
    "alexsmobs:banana_crate",
    "alexsmobs:bananas"
  ])
})
