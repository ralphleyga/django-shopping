import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import { connect } from 'react-redux'
import { addCart } from '../../actions/products'


function ImgSlide({...rest}) {
    return (
        <img {...rest}
            className="d-block w-100"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_170258a169a%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_170258a169a%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3125%22%20y%3D%22218.45%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt=""/>
    )

}

class ProductCarousel extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(item) {
        this.props.addCart(item)
    }

    render() {
        const { product } = this.props
        const itemList = product.items ? (
            product.items.map(item => {
                return (
                    <Carousel.Item key={item.id}>
                        <ImgSlide/>
                        <Carousel.Caption>
                        <strong>{item.title}</strong>
                        <p>${item.price}</p>
                        <button type="button" className="btn btn-info" onClick={() => this.handleClick(item)}>Add to Cart</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })
        ) : (
            <p>Loading...</p>
        )

        return (
            <section className='pb-5'>
                <Carousel>
                    {itemList}
                </Carousel>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addCart: item => dispatch(addCart(item))
})

export default connect(null, mapDispatchToProps)(ProductCarousel)