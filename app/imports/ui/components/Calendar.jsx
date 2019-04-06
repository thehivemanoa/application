import React from 'react';
import { Grid, Container, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import CalendarHeader from './CalendarHeader';
import Days from './Days';
import Cells from './Cells';

export default class Calendar extends React.Component {
  render() {
    return (
        <Container>
          <List>
            <List.Item>
              <Grid>
                <CalendarHeader month={this.props.month}
                                handlePreviousMonthClick={this.props.handlePreviousMonthClick}
                                handleNextMonthClick={this.props.handleNextMonthClick}/>
                <Days/>
              </Grid>
            </List.Item>
            <List.Item>
              <Cells month={this.props.month}
                     handleDayClick={this.props.handleDayClick}/>
            </List.Item>
          </List>
        </Container>
    );
  }
}

Calendar.propTypes = {
  month: PropTypes.object.isRequired,
  handlePreviousMonthClick: PropTypes.func.isRequired,
  handleNextMonthClick: PropTypes.func.isRequired,
  handleDayClick: PropTypes.func.isRequired,
};
