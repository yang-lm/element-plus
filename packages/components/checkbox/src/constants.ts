import type { InjectionKey, ToRefs, WritableComputedRef } from 'vue'
import type { CheckboxGroupProps, CheckboxGroupValueType } from './checkbox-group'

type CheckboxGroupContext = {
  modelValue?: WritableComputedRef<CheckboxGroupValueType>
  changeEvent?: (value: CheckboxGroupValueType) => Promise<void> 
} & ToRefs<
  Pick<
    CheckboxGroupProps,
    'size' | 'min' | 'max' | 'disabled' | 'validateEvent' | 'fill' | 'textColor'
  >
>

export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> =
  Symbol('checkboxGroupContextKey')
