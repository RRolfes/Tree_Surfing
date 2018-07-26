import {connect} from 'react-redux';

import EditProfile from './edit_profile';

const mapStateToProps = ( { session } ) => ({
  session
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
