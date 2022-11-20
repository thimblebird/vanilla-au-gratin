// priority: 999

var TagManager = {
  /*
type	String	Tag collection type.
get(String tag)	TagWrapper	Returns specific tag container which you can use to add or remove objects to. tag parameter can be something like 'forge:ingots/copper'. If tag doesn't exist, it will create a new one.
add(String tag, String[]/Regex ids)	TagWrapper	Shortcut method for event.get(tag).add(ids).
remove(String tag, String[]/Regex ids)	TagWrapper	Shortcut method for event.get(tag).remove(ids).
removeAll(String tag)	TagWrapper	Shortcut method for event.get(tag).removeAll().
removeAllTagsFrom(String[] ids)	void	Removes all tags from object
  */
  add: (e, namespace, type, category, items) => {
    if (Array.isArray(category)) {
      e.add(`${namespace}:${type}`, category);
      return;
    }

    e.add(`${namespace}:${type}/${category}`, items);
  },
};
