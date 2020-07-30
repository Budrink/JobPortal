/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Component } from 'react';
// import 'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js';
import { reduxForm } from 'redux-form';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
class ProjectTypeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectTypeList: [],
      loading: true,
      minValue: 0,
      maxValue: 150,
      step: 10,
      // CheckedCategories: [],
    };

    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  createSliderWithTooltip = Slider.createSliderWithTooltip;
  Range = this.createSliderWithTooltip(Slider.Range);
  Handle = Slider.Handle;

  handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="center"
        key={index}
      >
        <this.Handle value={value} {...restProps} />
      </Tooltip>
    );
  };

  wrapperStyle = { width: 200, margin: 10 };

  handleChange(event) {
    const target = event.target;
    this.props.handleTypeProjectChange(target);
  }

  handleSliderChange(event) {
    this.setState({ minValue: event[0] });
    this.setState({ maxValue: event[1] });
    this.props.handleProjectPriceChange(event);
  }
  // componentDidMount() {
  //   loadScripts(this.instance, false);
  // }
  render() {
    // let sliderValue = this.state.value;
    return (
      <div className="wt-widgetcontent">
        <form
          className="wt-formtheme wt-formsearch"
          onChange={this.handleChange}
        >
          <fieldset>
            <div className="wt-checkboxholder">
              <span className="wt-radio">
                <input
                  id="any"
                  type="radio"
                  name="description"
                  value="Any Project Type"
                  defaultChecked
                />
                <label htmlFor="any">Any Project Type</label>
              </span>
              <span className="wt-radio">
                <input
                  id="hourly"
                  type="radio"
                  name="description"
                  value="Hourly Based Project"
                />
                <label htmlFor="hourly">Hourly Based Project</label>
              </span>
              <div
                className="wt-amountbox"
                css={css`
                  padding: -750px 0px;
                  width: 180px;
                  text-alighn: center;
                `}
              >
                <input
                  type="text"
                  value={
                    this.state.minValue + ' $ -' + this.state.maxValue + ' $'
                  }
                  id="wt-consultationfeeamount"
                  readOnly
                />
              </div>
              <span className="wt-radio">
                <input
                  id="fixed"
                  type="radio"
                  name="description"
                  value="Fixed Price Project"
                />
                <label htmlFor="fixed">Fixed Price Project</label>
              </span>

              <div
                css={css`
                  width: 180px;
                  font-color: red;
                  color: red;
                  padding: 65px 7px;
                  height: 5 px;
                `}
              >
                <this.Range
                  min={0}
                  max={150}
                  defaultValue={[0, 150]}
                  tipFormatter={(value) => `${value}$ `}
                  onChange={this.handleSliderChange}
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
ProjectTypeForm = reduxForm({
  form: 'DurationForm',
})(ProjectTypeForm);

export default ProjectTypeForm;
