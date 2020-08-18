<template>
  <button class="cube-btn" :type="type" :class="btnClass" @click="handleClick">
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
const COMPONENT_NAME = 'rmv-button'

export default {
  name: COMPONENT_NAME,
  props: {
    icon: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    btnClass () {
      return {
        'cube-btn_active': this.active,
        'cube-btn_disabled': this.disabled,
        'cube-btn-inline': this.inline,
        'cube-btn-primary': this.primary,
        'cube-btn-outline': this.outline,
        'cube-btn-outline-primary': this.outline && this.primary,
        'cube-btn-light': this.light
      }
    }
  },
  methods: {
    handleClick (event) {
      if (this.disabled) {
        event.preventDefault()
        event.stopPropagation()
        return
      }
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss">
@import "../style/variable.scss";
@import "../style/mixin.scss";

.cube-btn {
  display: block;
  margin: 0;
  padding: 17px 16px;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  font-size: $fontsize-large;
  line-height: 1;
  color: $btn-color;
  background: $btn-bgc;
  outline: none;
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  > i {
    display: inline-block;
    margin-right: 4px;
    font-size: 100%;
    transform: scale(1.13);
    transform-origin: right center;
  }
}
.cube-btn-inline {
  width: auto;
  display: inline-block;
  vertical-align: middle;
  padding: 9px 10px;
  font-size: $fontsize-small;
  i {
    margin-right: 2px;
    transform: scale(1.14);
  }
}
.cube-btn-primary {
  color: $btn-primary-color;
  background: $btn-primary-bgc;
}
.cube-btn-light {
  color: $btn-light-color;
  background: $btn-light-bgc;
  box-shadow: $box-shadow-content;
}
.cube-btn-outline {
  color: $btn-outline-color;
  background: $btn-outline-bgc;
}
.cube-btn-outline-primary {
  color: $btn-outline-primary-color;
  background: $btn-outline-primary-bgc;
}
.cube-btn_disabled {
  color: $btn-disabled-color;
  background: $btn-disabled-bgc;
}
</style>
