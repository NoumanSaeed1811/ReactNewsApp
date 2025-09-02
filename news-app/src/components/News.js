import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Putin and Modi in China for summit overshadowed by trade wars with US",
            "description": "Prime Minister Narendra Modi is in China for the first time in seven years.",
            "url": "https://www.bbc.co.uk/news/articles/clyrwv0egzro",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/3e4c/live/c5cc70a0-862f-11f0-bc02-175687692641.jpg",
            "publishedAt": "2025-08-31T08:07:22.7898286Z",
            "content": "The organisation was created by China, Russia and four Central Asian countries in 2001 as a countermeasure to limit the influence of Western alliances such as Nato.\r\nThis year's gathering is the larg… [+1136 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Bayeux Tapestry: French voice fears over artwork's move to London",
            "description": "The precious medieval work is to be displayed in London next year - but the French art world is strongly opposed.",
            "url": "https://www.bbc.co.uk/news/articles/cev23vrzx0ro",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/cd20/live/1b459ab0-85fa-11f0-9cf6-cbf3e73ce2b9.jpg",
            "publishedAt": "2025-08-31T06:22:18.8802198Z",
            "content": "On 22 August a French official overseeing the loan defended the move, saying the artefact was not too fragile to transport. \r\nPhilippe Bélaval said no decision had yet been taken on how to transport … [+1362 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Driving tests: 'Learner driver abuse left me shaking - but I'm not giving up on lessons'",
            "description": "Learning to drive is a right of passage for many, but drivers and instructors face increasing abuse.",
            "url": "https://www.bbc.co.uk/news/articles/c2kz7kjpnkxo",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/a2c0/live/e48352f0-84c9-11f0-b391-6936825093bd.png",
            "publishedAt": "2025-08-31T03:52:20.8651734Z",
            "content": "\"I was so anxious, to the point where my hands and body were shaking. I wanted to park up and just not drive any more.\"\r\nLearner driver Teddy is recounting her fear at being tailgated by another driv… [+1213 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "'I've seen more sheriffs than Robin Hood' - showman fights eviction from family home",
            "description": "Showman Jimmy Stringfellow is facing the fight of his life - to save his Clydeside home.",
            "url": "https://www.bbc.co.uk/news/articles/cj4wjd1eqxdo",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/7ee6/live/4576ed90-83fa-11f0-a3f8-9b56bf5c3841.jpg",
            "publishedAt": "2025-08-31T02:07:23.6625463Z",
            "content": "She says it has been difficult explaining to her daughter what is happening.\r\n\"She doesn't really understand what's going on because she's only she's young,\" she said. \"But she knows something. She k… [+985 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Tories pledge to get 'all our oil and gas out of the North Sea'",
            "description": "The government warns Kemi Badenoch's plans would \"only accelerate the worsening climate crisis\".",
            "url": "https://www.bbc.co.uk/news/articles/cp890n51684o",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/468a/live/43964620-85fc-11f0-9cf6-cbf3e73ce2b9.jpg",
            "publishedAt": "2025-08-31T02:07:21.2701498Z",
            "content": "Exploring new fields would \"not take a penny off bills\" or improve energy security and would \"only accelerate the worsening climate crisis\", the government spokesperson warned.\r\nBadenoch signalled a … [+1698 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Stranded on Honeymoon Island: The BBC's answer to Love Island?",
            "description": "A new BBC reality show, Stranded on Honeymoon Island, tests whether love can thrive in isolation.",
            "url": "https://www.bbc.co.uk/news/articles/c9870nzz50eo",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/d1cc/live/3e2c70b0-8408-11f0-aabc-b10a292c5b5e.jpg",
            "publishedAt": "2025-08-31T01:22:17.1921537Z",
            "content": "\"It was hell.\"\r\nThat's how David describes his experience of roughing it on a remote tropical beach.\r\n\"The mosquitoes were just eating us alive,\" he says. \"I couldn't stand the amount of flies and th… [+1177 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Life inside notorious 'Alligator Alcatraz' in its final days",
            "description": "Family members of detainees say their loved ones disappeared into the notorious immigration detention facility.",
            "url": "https://www.bbc.co.uk/news/articles/cwy3zel0r3go",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/5dcf/live/46ef8010-85f8-11f0-9cf6-cbf3e73ce2b9.jpg",
            "publishedAt": "2025-08-31T01:07:23.3485566Z",
            "content": "It all began over a month ago when Marco left his home in Tallahassee, Florida, to visit a client to give an estimate for a construction job. Just outside their apartment, ICE agents pulled him over.… [+1734 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Dogs and drones join forest battle against eight-toothed beetle",
            "description": "Forestry Research said the UK is the first country to eradicate the beetle after five-year battle.",
            "url": "https://www.bbc.co.uk/news/articles/clyr8yml9rro",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/5137/live/bd986370-8603-11f0-a7fe-595af3bb2632.jpg",
            "publishedAt": "2025-08-31T01:07:21.2240857Z",
            "content": "And those risks are rising. Europe has seen populations of Ips increase as they take advantage of trees stressed by the changing climate. \r\nEurope is experiencing more extreme rainfall in winter and … [+1849 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Newspaper headlines: 'Gift of the jab and 'Rayner lobby row'",
            "description": "Increasing demand for weight loss drugs and Deputy Prime Minister Angela Rayner feature on the front pages.",
            "url": "https://www.bbc.co.uk/news/articles/c4gq1ng49eeo",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/0fdd/live/439ad3a0-85f4-11f0-9cf6-cbf3e73ce2b9.jpg",
            "publishedAt": "2025-08-31T00:52:12.9280319Z",
            "content": "Image caption, The Sun on Sunday features a photo of Rayner with her partner Sam Tarry alongside the headline \"Rayner lobby row\". It reports he has worked for a lobbying group which received £280,000… [+531 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "First week 'critical' to avoid children missing school later, parents told",
            "description": "Data suggests more than half of children who miss a day at the start of term become persistently absent.",
            "url": "https://www.bbc.co.uk/news/articles/cg7jk3rr225o",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/788a/live/187f4810-84e4-11f0-bdc5-0bac48b207b6.jpg",
            "publishedAt": "2025-08-30T23:52:24.5352613Z",
            "content": "Karl Stewart, head teacher at Shaftesbury Junior School in Leicester, said his school's attendance rates were higher than average and but there was a \"definite dip\" in the two years after Covid.\r\n\"I … [+865 chars]"
        }
    ]

    static defaultProps = {
        pageSize : 10,
        category : "general",

    }

    static propTypes = {

        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,

    }
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }

    }
    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b1569f755d4642358dd8e587065fab7f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState(
            {
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false
            }
        )

    }
    async componentDidMount() {
       this.updateNews()
    }
    handleNextClick = async () => {
        this.setState({
            page:this.state.page+1
        });
        this.updateNews()
    }

    handlePreviousClick = async () => {
        this.setState({
            page : this.state.page -1
        });
        this.updateNews()

    }

    render() {
        return (
            <div className="container">
                <h2>News HeadLines</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-sm-3 mx-2" key={element.url}>
                            <NewsItem
                                title={element.title ? element.title.slice(0, 45) : ""}
                                desc={element.description ? element.description.slice(0, 88) : ""}
                                imageUrl={element.urlToImage ? element.urlToImage : "https://s.yimg.com/ny/api/res/1.2/S36LOCNUfaPy27g9c7r4_w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU7Y2Y9d2VicA--/https://s.yimg.com/os/creatr-uploaded-images/2025-08/8dba44b0-835c-11f0-bfd7-105b09990dac"}
                                newsUrl={element.url}
                                author = {element.author}
                                date = {element.publishedAt}
                                source = {element.source.name}
                            />
                        </div>
                    })}

                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-dark" disabled={this.state.page <= 1} onClick={this.handlePreviousClick}>&laquo; Previous</button>
                    <button type="button" className="btn btn-dark" disabled={this.state.page + 1 > (this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick}>Next &raquo;</button>
                </div>
            </div>
        );
    }
}

export default News;
