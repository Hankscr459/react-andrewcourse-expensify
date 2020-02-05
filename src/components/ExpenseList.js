import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpensesListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense}/>;
                })
            )
        }
    </div>
)
// <ExpenseListItem key={expense.id} id={expense.id} description={expense.description} amount={expense.amount} etc />
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);

