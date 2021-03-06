class info{
    Id;
    Img;
    Status;
    Month;
    Number;
    Minute;
    Title;
    Description;
    Comments;
    Like;

    constructor(id,img,status,month,number,minute,title,description,comments,like){
        this.Id = id;
        this.Img = img;
        this.Status = status;
        this.Month = month;
        this.Number = number;
        this.Minute = minute;
        this.Title = title;
        this.Description = description;
        this.Comments = comments;
        this.Like = like;
    }
}

var cardInfo = [
    new info("1","./img/img-girl1.jpg","Admin","июля",8,1,"Как выбрать идеальный принт","Вы уже придумали дизайн для блога? Попробуйте каждый из наших восьми макетов, чтобы скомпоновать содержание наилучшим образом.",8,9),
    new info("2","./img/img-girl2.jpg","Admin","июля",8,1,"Модная штучка: жакет","Вы уже придумали дизайн для блога? Попробуйте каждый из наших восьми макетов, чтобы скомпоновать содержание наилучшим образом.",3,9),
    new info("3","./img/clothes.jpg","Admin","июля",8,1,"5 осенних образов, которые вы полюбите","Вы уже придумали дизайн для блога? Попробуйте каждый из наших восьми макетов, чтобы скомпоновать содержание наилучшим образом.",7,9)
]

if(document.body.id == "home"){

    var cardArea = document.querySelector(".card-area")
    
    
    cardInfo.forEach(o => {
        cardArea.innerHTML += getCard(o);
    })
    
    
    function getCard(item){
        var paragrap = "";
        if(item.Description.length > 120){
            paragrap = item.Description.slice(0,120);
        }else{
            paragrap = item.Description
        }
        return `<div class="blog-card">
                    <div class="blog-card-img">
                        <img src="${item.Img}" alt="">
                    </div>
                    <div class="blog-card-content">
                        <article>
                            <div class="svg"> <svg width="32" height="32" viewBox="0 0 1000 1000" class="_17YWs"><circle cx="500" cy="500" r="500" fill="#cccccc"></circle><path fill="#a0a09f" d="M830.8,874.927c-77.344-60.8-187.181-104.877-227.88-111.347-20.335-3.233-20.8-59.1-20.8-59.1s59.746-59.106,72.768-138.584c35.029,0,56.666-84.5,21.631-114.226C677.986,420.37,721.551,206,501,206S324.015,420.37,325.473,451.666c-35.033,29.729-13.4,114.226,21.632,114.226,13.021,79.478,72.77,138.584,72.77,138.584s-0.464,55.871-20.8,59.1c-40.883,6.5-151.537,50.943-228.934,112.176C65.84,784.12,0,649.751,0,500,0,223.858,223.858,0,500,0s500,223.858,500,500C1000,649.3,934.559,783.311,830.8,874.927ZM500,1000h0Z"></path></svg></div>
                            <div> 
                                <a href="#">${item.Status}</a>
                                <ul>
                                    <li>${item.Month}</li>
                                    <li>${item.Number}</li>
                                    <li><div></div></li>
                                    <li>${item.Minute}</li>
                                    <li>min</li>
                                </ul>
                            </div>
                        </article>
    
                        <a href="blog-item.html?${item.Id}">                            
                            <h3>${item.Title}</h3>
                        </a>
                        <p>${paragrap}...</p>
                        
                        <div class="blog-card-futer">
                            <div><a href="#">Комментари</a></div>
    
                            <div class="card-svg">
                                <span>${item.Like}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img"><path d="M9.44985848,15.5291774 C9.43911371,15.5362849 9.42782916,15.5449227 9.41715267,15.5553324 L9.44985848,15.5291774 Z M9.44985848,15.5291774 L9.49370677,15.4941118 C9.15422701,15.7147757 10.2318883,15.0314406 10.7297038,14.6971183 C11.5633567,14.1372547 12.3827081,13.5410755 13.1475707,12.9201001 C14.3829188,11.9171478 15.3570936,10.9445466 15.9707237,10.0482572 C16.0768097,9.89330422 16.1713564,9.74160032 16.2509104,9.59910798 C17.0201658,8.17755699 17.2088969,6.78363112 16.7499013,5.65913129 C16.4604017,4.81092573 15.7231445,4.11008901 14.7401472,3.70936139 C13.1379564,3.11266008 11.0475663,3.84092251 9.89976068,5.36430396 L9.50799408,5.8842613 L9.10670536,5.37161711 C7.94954806,3.89335486 6.00516066,3.14638251 4.31830373,3.71958508 C3.36517186,4.00646284 2.65439601,4.72068063 2.23964629,5.77358234 C1.79050315,6.87166888 1.98214559,8.26476279 2.74015555,9.58185512 C2.94777753,9.93163559 3.23221417,10.3090129 3.5869453,10.7089994 C4.17752179,11.3749196 4.94653811,12.0862394 5.85617417,12.8273544 C7.11233096,13.8507929 9.65858244,15.6292133 9.58280954,15.555334 C9.53938013,15.5129899 9.48608859,15.5 9.50042471,15.5 C9.5105974,15.5 9.48275828,15.5074148 9.44985848,15.5291774 Z"></path></svg>
                            </div>
                        </div>
                    </div>
    
    
                </div>`
    }
}
else if(document.body.id == "blog"){
    var blogCardArea = document.querySelector(".blog-card-area");

    cardInfo.forEach(o => {
        blogCardArea.innerHTML += getBlogCard(o);
    })

    function getBlogCard(item){
        return ` <div class="card">
                    <ul>
                        <li><svg width="32" height="32" viewBox="0 0 1000 1000" class="_17YWs"><circle cx="500" cy="500" r="500" fill="#cccccc"></circle><path fill="#a0a09f" d="M830.8,874.927c-77.344-60.8-187.181-104.877-227.88-111.347-20.335-3.233-20.8-59.1-20.8-59.1s59.746-59.106,72.768-138.584c35.029,0,56.666-84.5,21.631-114.226C677.986,420.37,721.551,206,501,206S324.015,420.37,325.473,451.666c-35.033,29.729-13.4,114.226,21.632,114.226,13.021,79.478,72.77,138.584,72.77,138.584s-0.464,55.871-20.8,59.1c-40.883,6.5-151.537,50.943-228.934,112.176C65.84,784.12,0,649.751,0,500,0,223.858,223.858,0,500,0s500,223.858,500,500C1000,649.3,934.559,783.311,830.8,874.927ZM500,1000h0Z"></path></svg></li>
                        <li><div></div></li>
                        <li>${item.Month} ${item.Number}</li>
                        <li><div></div></li>
                        <li>${item.Minute} мин</li>
                    </ul>
                    <a class="card-title" href="blog-item.html?${item.Id}">
                        ${item.Title}
                    </a>
                    
                    <img src="${item.Img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p>Это текст поста. Поделитесь с читателями и потенциальными клиентами интересной и полезной информацией по теме. Используйте посты как возможность постоянного общения с посетителями: делитесь новостями, советами и трендами. </p>
                        <span>Дизайн в два счета</span>
                        <h5>${item.Description}</h5>
                        <p>Во все макеты встроены кнопки и счетчики социальных сетей, чтобы посетители делились, лайкали, комментировали посты и видели, сколько человек это уже сделали. Wix Blog поможет вам создать собственное онлайн-сообщество.</p>
                        <span>Организация контента</span>
                        <p>Вам предстоит опубликовать множество постов, поэтому используйте рубрики для упорядочивания материалов. Это поможет читателям легче ориентироваться в блоге. Каждой рубрике отводится отдельная страница, которую можно полностью настроить: добавить заголовок, краткое описание и фотографию. Чтобы помочь читателям быстро найти интересный контент, добавляйте к постам хештеги — ключевые слова-ссылки (#дизайн #спорт #онлайн-маркетинг). Кликнув по хештегу или набрав ключевое слово в поиске, посетители получат список всех постов с этим хештегом. </p>
                        <div class="blog-card-futer">
                            <div class="comment">
                                <p>Просмотров: 17</p>
                                <p>Комментари: ${item.Comments}</p>
                            </div>

                            <div class="card-svg">
                                <span>${item.Like}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img"><path d="M9.44985848,15.5291774 C9.43911371,15.5362849 9.42782916,15.5449227 9.41715267,15.5553324 L9.44985848,15.5291774 Z M9.44985848,15.5291774 L9.49370677,15.4941118 C9.15422701,15.7147757 10.2318883,15.0314406 10.7297038,14.6971183 C11.5633567,14.1372547 12.3827081,13.5410755 13.1475707,12.9201001 C14.3829188,11.9171478 15.3570936,10.9445466 15.9707237,10.0482572 C16.0768097,9.89330422 16.1713564,9.74160032 16.2509104,9.59910798 C17.0201658,8.17755699 17.2088969,6.78363112 16.7499013,5.65913129 C16.4604017,4.81092573 15.7231445,4.11008901 14.7401472,3.70936139 C13.1379564,3.11266008 11.0475663,3.84092251 9.89976068,5.36430396 L9.50799408,5.8842613 L9.10670536,5.37161711 C7.94954806,3.89335486 6.00516066,3.14638251 4.31830373,3.71958508 C3.36517186,4.00646284 2.65439601,4.72068063 2.23964629,5.77358234 C1.79050315,6.87166888 1.98214559,8.26476279 2.74015555,9.58185512 C2.94777753,9.93163559 3.23221417,10.3090129 3.5869453,10.7089994 C4.17752179,11.3749196 4.94653811,12.0862394 5.85617417,12.8273544 C7.11233096,13.8507929 9.65858244,15.6292133 9.58280954,15.555334 C9.53938013,15.5129899 9.48608859,15.5 9.50042471,15.5 C9.5105974,15.5 9.48275828,15.5074148 9.44985848,15.5291774 Z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>`
    }

}
else if(document.body.id == "blog-item"){
    var main = document.querySelector("#blog-item-content");

    cardInfo.forEach(o => {
        if(o.Id == window.location.href.split("?").slice(-1)[0]){
            main.innerHTML += getBlogItem(o);
        }

    })

    function getBlogItem(item){
        return `<section class="blog-item-card-area">
                    <div class="card">
                        <ul>
                            <li><svg width="32" height="32" viewBox="0 0 1000 1000" class="_17YWs"><circle cx="500" cy="500" r="500" fill="#cccccc"></circle><path fill="#a0a09f" d="M830.8,874.927c-77.344-60.8-187.181-104.877-227.88-111.347-20.335-3.233-20.8-59.1-20.8-59.1s59.746-59.106,72.768-138.584c35.029,0,56.666-84.5,21.631-114.226C677.986,420.37,721.551,206,501,206S324.015,420.37,325.473,451.666c-35.033,29.729-13.4,114.226,21.632,114.226,13.021,79.478,72.77,138.584,72.77,138.584s-0.464,55.871-20.8,59.1c-40.883,6.5-151.537,50.943-228.934,112.176C65.84,784.12,0,649.751,0,500,0,223.858,223.858,0,500,0s500,223.858,500,500C1000,649.3,934.559,783.311,830.8,874.927ZM500,1000h0Z"></path></svg></li>
                            <li><div></div></li>
                            <li>${item.Month} ${item.Number}</li>
                            <li><div></div></li>
                            <li>${item.Minute} мин</li>
                        </ul>
                        
                        <h3 class="card-title">${item.Title}</h3>
                        <img src="${item.Img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p>Это текст поста. Поделитесь с читателями и потенциальными клиентами интересной и полезной информацией по теме. Используйте посты как возможность постоянного общения с посетителями: делитесь новостями, советами и трендами. </p>
                            <span>Дизайн в два счета</span>
                            <h5>${item.Description}</h5>
                            <p>Во все макеты встроены кнопки и счетчики социальных сетей, чтобы посетители делились, лайкали, комментировали посты и видели, сколько человек это уже сделали. Wix Blog поможет вам создать собственное онлайн-сообщество.</p>
                            <span>Организация контента</span>
                            <p>Вам предстоит опубликовать множество постов, поэтому используйте рубрики для упорядочивания материалов. Это поможет читателям легче ориентироваться в блоге. Каждой рубрике отводится отдельная страница, которую можно полностью настроить: добавить заголовок, краткое описание и фотографию. Чтобы помочь читателям быстро найти интересный контент, добавляйте к постам хештеги — ключевые слова-ссылки (#дизайн #спорт #онлайн-маркетинг). Кликнув по хештегу или набрав ключевое слово в поиске, посетители получат список всех постов с этим хештегом. </p>
                            <div class="blog-card-futer">
                                <div class="comment">
                                    <p>Просмотров: 17</p>
                                    <p>Комментариев: ${item.Comments}</p>
                                </div>

                                <div class="card-svg">
                                    <span>${item.Like}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img"><path d="M9.44985848,15.5291774 C9.43911371,15.5362849 9.42782916,15.5449227 9.41715267,15.5553324 L9.44985848,15.5291774 Z M9.44985848,15.5291774 L9.49370677,15.4941118 C9.15422701,15.7147757 10.2318883,15.0314406 10.7297038,14.6971183 C11.5633567,14.1372547 12.3827081,13.5410755 13.1475707,12.9201001 C14.3829188,11.9171478 15.3570936,10.9445466 15.9707237,10.0482572 C16.0768097,9.89330422 16.1713564,9.74160032 16.2509104,9.59910798 C17.0201658,8.17755699 17.2088969,6.78363112 16.7499013,5.65913129 C16.4604017,4.81092573 15.7231445,4.11008901 14.7401472,3.70936139 C13.1379564,3.11266008 11.0475663,3.84092251 9.89976068,5.36430396 L9.50799408,5.8842613 L9.10670536,5.37161711 C7.94954806,3.89335486 6.00516066,3.14638251 4.31830373,3.71958508 C3.36517186,4.00646284 2.65439601,4.72068063 2.23964629,5.77358234 C1.79050315,6.87166888 1.98214559,8.26476279 2.74015555,9.58185512 C2.94777753,9.93163559 3.23221417,10.3090129 3.5869453,10.7089994 C4.17752179,11.3749196 4.94653811,12.0862394 5.85617417,12.8273544 C7.11233096,13.8507929 9.65858244,15.6292133 9.58280954,15.555334 C9.53938013,15.5129899 9.48608859,15.5 9.50042471,15.5 C9.5105974,15.5 9.48275828,15.5074148 9.44985848,15.5291774 Z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="all-item" href="./blog.html">Смотреть все</a>
                </section>`
    }
}