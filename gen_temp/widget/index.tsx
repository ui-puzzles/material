import React from "react";
import styled from "styled-components";

import BaseWidget, { WidgetProps, WidgetState } from "widgets/BaseWidget";
import { DerivedPropertiesMap } from "utils/WidgetFactory";

import InputComponent from "../component";
import { pick } from 'lodash';
import { EvaluationSubstitutionType } from 'entities/DataTree/dataTreeFactory';
import { ValidationTypes } from 'constants/WidgetValidation';

class InputH5Widget extends BaseWidget<InputH5WidgetProps, WidgetState> {
  static getPropertyPaneConfig() {
    return [ {
        sectionName: '基础属性',
        children: [
          {
            helpText: '输入框的占位符',
            propertyName: 'placeholder',
            label: '占位符',
            controlType: 'INPUT_TEXT',
            placeholderText: '请输入占位符',
          },
          {
            helpText: '输入框的类型',
            propertyName: 'type',
            label: '类型',
            controlType: 'DROP_DOWN',
            options: [
              { label: '文本', value: 'text' },
              { label: '密码', value: 'password' },
            ],
          },
        ],
      }];
  }

  static getDerivedPropertiesMap(): DerivedPropertiesMap {
    return {};
  }

  static getDefaultPropertiesMap(): Record<string, string> {
    return {};
  }

  static getMetaPropertiesMap(): Record<string, any> {
    return {};
  }

  getPageView() {
    return <InputComponent {...pick(this.props, ['placeholder', 'value', 'onChange', 'type', 'disabled'])}/>;
  }

  static getWidgetType(): string {
    return "INPUTH5_WIDGET";
  }
}

export interface InputH5WidgetProps extends WidgetProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type: string;
  disabled: boolean;
}

export default InputH5Widget;