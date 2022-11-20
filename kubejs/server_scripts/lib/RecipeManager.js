// priority: 999

var RecipeManager = {
  fix: (e, arrayOfMaps) => {
    arrayOfMaps.forEach((map) => {
      for (const [key, value] of map) {
        e.remove({ output: key });
        // e.shapeless("");
      }
    });
  },
  remove: (e, array) => {
    array.forEach((obj) => {
      if (isString(obj)) return e.remove({ output: obj });
      e.remove(obj);
    });
  },
  replace: (e, type, obj) => {
    if (!obj.options) {
      obj.options = {};
    }

    switch (type) {
      case "input":
        e.replaceInput(obj.options, obj.what, obj.with);
        break;

      case "output":
        e.replaceOutput(obj.options, obj.what, obj.with);
        break;

      default:
        break;
    }
  },
  add: (e, group, output, patterns, keys) => {
    const item_count_matcher = "x ";
    const getOutputJson = (str) => {
      const result = { item: str };

      if (str.trim().includes(item_count_matcher))
        result.count = str.split(item_count_matcher)[0];

      return result;
    };

    patterns = Array.isArray(patterns[0]) ? patterns : Array.of(patterns);
    patterns
      .map((pattern) => {
        const isShaped =
          keys && Object.keys(keys).length && pattern[0].length == 3;
        const result = {
          group: group,
          result: getOutputJson(output),
          type: `minecraft:crafting_${isShaped ? "shaped" : "shapeless"}`,
        };

        if (isShaped) {
          let pattern_flat = pattern.join("");
          let unique_keys = {};

          Object.keys(keys)
            .filter((key) => pattern_flat.includes(key))
            .forEach((unique_key) => {
              unique_keys[unique_key] = keys[unique_key];
            });

          result.pattern = pattern;
          result.key = unique_keys;
        } else {
          let totalItemCount = 0;

          result.ingredients = [];

          pattern.forEach((entry) => {
            if (entry.trim().includes(item_count_matcher)) {
              const split = entry.split(item_count_matcher);
              const item = split[1];
              const count = split[0];
              for (let i = 0; i < count; i++) {
                if (totalItemCount > 9) return result;

                result.ingredients.push(item);
                totalItemCount++;
              }
            } else {
              result.ingredients.push(entry);
            }
          });
        }

        return result;
      })
      .forEach((recipe) => e.custom(recipe));
  },
};
