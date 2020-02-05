import React from 'react';
import  { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={23512345980} />);
    expect(wrapper).toMatchSnapshot();
});