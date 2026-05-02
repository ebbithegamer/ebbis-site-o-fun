const headerHTML = `
    <div id="header-area">
    <img src="/images/Banner.png" alt="Ebbi's Site O' Fun!!" id="main-banner">
    <div class="full-nav-bar">
        <nav id="top-nav">
            <a href="/" class="nav-btn">HOME</a>
            <a href="/about" class="nav-btn">ABOUT</a>
            <a href="/blog" class="nav-btn">BLOG</a>
            <a href="/info" class="nav-btn">INFO</a>
            <a href="/ircwebchat" class="nav-btn">IRC CHAT</a>
        </nav>

        <nav id="search-nav">
            <form action="/search" method="get" class="sfm" name="search">
                <input class="search" type="text" placeholder="o(*￣▽￣*)ブ" name="q">
                <button type="submit" class="button">Search!!</button>
                <select class="filter" name="f">
                    <option value="" selected="">Filter</option>
                    <option value="Current">Current</option>
                    <option value="Archived">Archived</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Testing">Testing</option>
                </select> 
                <img src="/images/catcomputer.gif" alt="Nuko Cat" style="vertical-align: middle;"/>
            </form>
        </nav>
    </div>
    </div>
`;
function addHeader() {
    const wrapper = document.getElementById('wrapper');
    if (wrapper) {
        wrapper.insertAdjacentHTML('afterbegin', headerHTML);
    }
}
addHeader();