import * as React from 'react';
import { hot } from 'react-hot-loader';

type Product = {
    style: string;
    colour: string[];
    description: string;
    price: number;
    image: string;
}

type AppState = {
    products: Product[],
    searchString: string
}

class App extends React.Component<{}, AppState> {
    handleSearch = (input: string) => {
        console.log(input);
        this.setState({ searchString: input });
    }

    state = {
        searchString: "",
        products: [
            { style: "Mattress", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Headphones", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Coffee Maker", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Games Console", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Ice Cream Maker", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Washing Machine", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Spoon", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Knife", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Pillow", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Laptop", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Desktop Computer", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Sieve", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Mattress", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Headphones", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Coffee Maker", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Games Console", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Ice Cream Maker", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Washing Machine", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Spoon", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Knife", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Pillow", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Laptop", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Desktop Computer", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Sieve", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Mattress", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Headphones", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Coffee Maker", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Games Console", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Ice Cream Maker", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Washing Machine", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Spoon", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Knife", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Pillow", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Laptop", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Desktop Computer", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" },
            { style: "Sieve", colour: ["Red", "Blue", "White"], description: "Beginner Mattress", price: 500, image: "" }
        ]
    }
    render() {
        const { searchString, products } = this.state;

        const filteredProducts = products.filter(x => searchString === "" || x.style.toLowerCase().includes(searchString.toLowerCase()));

        return (
            <React.Fragment>
                <div className="container">
                    <h1 className="text-center mt-5" style={{ fontFamily: "LemonMilk" }}>NO BULLSHIT.</h1>
                    <p className="text-muted font-italic text-right">No bullshit, just products.</p>
                    <hr />

                    <input onKeyUp={(e) => this.handleSearch(e.currentTarget.value)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

                </div>

                <div className="row m-5">
                    {filteredProducts.map(x => {
                        return <div className="card col-md-1 m-1 p-0">
                            <img className="card-img-top" src="https://rimage.gnst.jp/livejapan.com/public/img/common/noimage.jpg?20190112050043" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{x.style}</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    })}
                </div>
            </React.Fragment>
        );
    }
}
export default hot(module)(App);