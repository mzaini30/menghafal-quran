require(['gitbook', 'jQuery'], (gitbook, $) => {
	ubah = () => {
		mermaid.init(undefined, $(".mermaid"))
	}
	gitbook.events.bind('page.change', ubah)
})