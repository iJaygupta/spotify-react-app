import React, { Component } from "react";
import CategoryList from '../components/Category/CategoryList'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions/index'
import { Navbar, Nav, Form, FormControl, InputGroup } from 'react-bootstrap';



class Category extends Component {
    constructor() {
        super()
        this.state = {
            offset: '0',
            limit: '50'
        }

    }

    applyFilter() {
        let filters = {
            offset: this.state.offset,
            limit: this.state.limit,
        }
        this.props.profileAction.getCategoryListing(filters, (response) => {
            console.log(response)
        })
    }


    componentDidMount() {
        let filters = {
            offset: this.state.offset,
            limit: this.state.limit,
        }
        this.getCategoryListing(filters);
    }

    getCategoryListing(filters) {
        this.props.categoryAction.getCategoryList(filters, (response) => {
            console.log(response)
        })
    }


    render() {
        let items = this.props.category && this.props.category.items && this.props.category.items.length ? this.props.category.items : []
        console.log(this.props)
        return (
            <div>
                <Navbar bg="dark" variant="dark" onScroll={this.listenScrollEvent}>

                    <div className="has-search">
                        <span className="form-control-feedback"></span>
                        <input type="text" className="form-control" placeholder="Search Here" onChange={this.handleMovieSearch} />
                    </div>
                    {/* <span class="glyphicon glyphicon-home">hjkjk</span> */}
                </Navbar>
                <CategoryList category={items} />
            </div>
        )

    }

}

function mapStateToProps(state) {
    return {
        category: state.categoryData.category,
    }
}

function mapDispatchToProps(dispatch) {

    return {
        categoryAction: bindActionCreators(actions.category, dispatch),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Category);
