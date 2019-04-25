import React from 'react';
import { Grid, Image, Header, Divider, Input, Form, Button, Checkbox, Container, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class DefaultLanding extends React.Component {

  render() {
    return (
        <div className="landing-page">
          <div className='landing-register-panel'>
            <Container>
              <Grid columns={2} divided>
                <Grid.Column>
                  <div className="ui center aligned container">
                    <Image src='/images/landing-bees.png'/>
                  </div>
                </Grid.Column>

                <Grid.Column>
                  <h2><Icon id="triangle-icon" fitted name='triangle right'/> Register Today!</h2>
                  <Form id='registration-form' inverted>
                    <Form.Field>
                      <label>First Name</label>
                      <Input fluid transparent placeholder='First Name'/>
                    </Form.Field>
                    <Divider inverted/>

                    <Form.Field>
                      <label>Last Name</label>
                      <Input fluid transparent placeholder='Last Name'/>
                    </Form.Field>
                    <Divider inverted/>

                    <Form.Field>
                      <label>Email</label>
                      <Input fluid transparent placeholder='example@email.com'/>
                    </Form.Field>
                    <Divider inverted/>

                    <Form.Field>
                      <label>Password</label>
                      <Input fluid transparent placeholder='Password'/>
                    </Form.Field>
                    <Divider/>

                    <Form.Field>
                      <Checkbox label='I agree to the Terms and Conditions.'/>
                    </Form.Field>
                    <Button id='register-button' type='submit'>Submit</Button>
                  </Form>
                </Grid.Column>
              </Grid>
            </Container>
          </div>

          <Grid verticalAlign='middle' textAlign='center' style={{ marginTop: '0' }}>
            <Grid.Row columns={2} className="landing-panel-1">
              <Grid.Column width={5}>
                <Header as={'landing-header'}>What is Waggle?</Header>
                <p className="landing-text">
                  Waggle provides students of the University of Hawaiʻi at Mānoa a platform to easily   organize in-person study groups and help other students with coursework and projects for any class.  How un-BEE-lievable!
                </p>
              </Grid.Column>
              <Grid.Column width={5}>
                <Image src={''} style={{ width: '500px' }}/>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row className="landing-panel-2">
              <Grid.Column width={5}>
                <Image src={''} style={{ width: '500px' }}/>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header as={'landing-header'}>Schedule a Session</Header>
                <p className="landing-text">
                  Create and schedule a study session for other students to join. All you need to do is choose a time, location, and the course you want to study for then you'll BEE all set!
                </p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row className="landing-panel-3">
              <Grid.Column width={5}>
                <Header as={'landing-header'}>Plan in Advance</Header>
                <p className="landing-text">
                  Waggle’s built-in calendar is detailed without BEE-ing overcrowded, making it easy to browse new study sessions. Once you’ve made a decision, you can choose to join or leave with the click of a button!
                </p>
              </Grid.Column>
              <Grid.Column width={5}>
                <Image src={''} style={{ width: '500px' }}/>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row className="landing-panel-4">
              <Grid.Column width={5}>
                <Image src={''} style={{ width: '500px' }}/>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header as={'landing-header'}>Move Up the Ranks</Header>
                <p className="landing-text">
                  The more you Waggle, the more honey you collect. Join and create study sessions to level up  your profile and climb the user leaderboard. Go and get your BUZZ on!
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default DefaultLanding;
