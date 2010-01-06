jetpack.future.import("menu");
jetpack.future.import("clipboard");
jetpack.future.import("selection");
jetpack.menu.context.page.insertBefore( {
	label: "Copy HTML",
	command: function(){
		jetpack.clipboard.set( jetpack.selection.html );
	}
}, "Copy" );