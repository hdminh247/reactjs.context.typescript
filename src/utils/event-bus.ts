const EventBus = {
  Event: {
    UPDATE_SIDE_BAR_STATUS: "UPDATE_SIDE_BAR_STATUS",
  },

  on(event: any, callback: any) {
    // eslint-disable-next-line no-undef
    document.addEventListener(event, (e) => callback(e, e.detail));
  },
  dispatch(event: any, data = {}) {
    // eslint-disable-next-line no-undef
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  remove(event: any, callback?: any) {
    // eslint-disable-next-line no-undef
    document.removeEventListener(event, callback);
  },
};

export default EventBus;
