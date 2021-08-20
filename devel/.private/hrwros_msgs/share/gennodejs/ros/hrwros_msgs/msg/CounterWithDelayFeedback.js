// Auto-generated. Do not edit!

// (in-package hrwros_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class CounterWithDelayFeedback {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.counts_elapsed = null;
    }
    else {
      if (initObj.hasOwnProperty('counts_elapsed')) {
        this.counts_elapsed = initObj.counts_elapsed
      }
      else {
        this.counts_elapsed = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type CounterWithDelayFeedback
    // Serialize message field [counts_elapsed]
    bufferOffset = _serializer.uint32(obj.counts_elapsed, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type CounterWithDelayFeedback
    let len;
    let data = new CounterWithDelayFeedback(null);
    // Deserialize message field [counts_elapsed]
    data.counts_elapsed = _deserializer.uint32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 4;
  }

  static datatype() {
    // Returns string type for a message object
    return 'hrwros_msgs/CounterWithDelayFeedback';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'cca3cfadafd90f6c2989b5f5e521eb59';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    uint32 counts_elapsed		# Feedback message: number of counts elapsed.
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new CounterWithDelayFeedback(null);
    if (msg.counts_elapsed !== undefined) {
      resolved.counts_elapsed = msg.counts_elapsed;
    }
    else {
      resolved.counts_elapsed = 0
    }

    return resolved;
    }
};

module.exports = CounterWithDelayFeedback;