/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the TaskAddParameter class.
 * @constructor
 * An Azure Batch task to add.
 * @member {string} id A string that uniquely identifies the task within the
 * job. The id can contain any combination of alphanumeric characters
 * including hyphens and underscores, and cannot contain more than 64
 * characters.
 * 
 * @member {string} [displayName] A display name for the task.
 * 
 * @member {string} commandLine The command line of the task. For
 * multi-instance tasks, the command line is executed on the primary subtask
 * after all the subtasks have finished executing the coordianation command
 * line.
 * 
 * @member {array} [resourceFiles] A list of files that the Batch service will
 * download to the compute node before running the command line. For
 * multi-instance tasks, the resource files will only be downloaded to the
 * compute node on which the primary subtask is executed.
 * 
 * @member {array} [environmentSettings] A list of environment variable
 * settings for the task.
 * 
 * @member {object} [affinityInfo] A locality hint that can be used by the
 * Batch service to select a compute node on which to start the new task.
 * 
 * @member {string} [affinityInfo.affinityId] An opaque string representing
 * the location of a compute node or a task that has run previously. You can
 * pass the AffinityId of a compute node or task to indicate that this task
 * needs to be placed close to the node or task.
 * 
 * @member {object} [constraints] The execution constraints that apply to this
 * task.
 * 
 * @member {moment.duration} [constraints.maxWallClockTime] The maximum
 * elapsed time that the task may run, measured from the time the task
 * starts. If the task does not complete within the time limit, the Batch
 * service terminates it.
 * 
 * @member {moment.duration} [constraints.retentionTime] The minimum time to
 * retain the working directory for the task on the compute node where it
 * ran, from the time it completes execution. After this time, the Batch
 * service may delete the working directory and all its contents. The default
 * is infinite.
 * 
 * @member {number} [constraints.maxTaskRetryCount] The maximum number of
 * times the task may be retried. The Batch service retries a task if its
 * exit code is nonzero.
 * 
 * @member {boolean} [runElevated] Whether to run the task in elevated mode.
 * 
 * @member {object} [multiInstanceSettings] Information about how to run the
 * multi-instance task.
 * 
 * @member {number} [multiInstanceSettings.numberOfInstances] The number of
 * compute nodes required by the multi-instance task.
 * 
 * @member {string} [multiInstanceSettings.coordinationCommandLine] The
 * command to run on the compute node instances for coordinating among the
 * subtasks.
 * 
 * @member {array} [multiInstanceSettings.commonResourceFiles] A list of files
 * that the Batch service will download before running the coordination
 * command line. The difference between common resource files and task
 * resource files is that common resource files are downloaded for all
 * subtasks including the primary, whereas task resource files are downloaded
 * only for the primary.
 * 
 * @member {object} [dependsOn] Any other tasks that this task depends on.
 * 
 * @member {array} [dependsOn.taskIds] The list of task ids that must complete
 * before this task can be scheduled.
 * 
 * @member {array} [dependsOn.taskIdRanges] The list of task ranges that must
 * complete before this task can be scheduled.
 * 
 */
function TaskAddParameter() {
}

/**
 * Defines the metadata of TaskAddParameter
 *
 * @returns {object} metadata of TaskAddParameter
 *
 */
TaskAddParameter.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'TaskAddParameter',
    type: {
      name: 'Composite',
      className: 'TaskAddParameter',
      modelProperties: {
        id: {
          required: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        displayName: {
          required: false,
          serializedName: 'displayName',
          type: {
            name: 'String'
          }
        },
        commandLine: {
          required: true,
          serializedName: 'commandLine',
          type: {
            name: 'String'
          }
        },
        resourceFiles: {
          required: false,
          serializedName: 'resourceFiles',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ResourceFileElementType',
                type: {
                  name: 'Composite',
                  className: 'ResourceFile'
                }
            }
          }
        },
        environmentSettings: {
          required: false,
          serializedName: 'environmentSettings',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'EnvironmentSettingElementType',
                type: {
                  name: 'Composite',
                  className: 'EnvironmentSetting'
                }
            }
          }
        },
        affinityInfo: {
          required: false,
          serializedName: 'affinityInfo',
          type: {
            name: 'Composite',
            className: 'AffinityInformation'
          }
        },
        constraints: {
          required: false,
          serializedName: 'constraints',
          type: {
            name: 'Composite',
            className: 'TaskConstraints'
          }
        },
        runElevated: {
          required: false,
          serializedName: 'runElevated',
          type: {
            name: 'Boolean'
          }
        },
        multiInstanceSettings: {
          required: false,
          serializedName: 'multiInstanceSettings',
          type: {
            name: 'Composite',
            className: 'MultiInstanceSettings'
          }
        },
        dependsOn: {
          required: false,
          serializedName: 'dependsOn',
          type: {
            name: 'Composite',
            className: 'TaskDependencies'
          }
        }
      }
    }
  };
};

module.exports = TaskAddParameter;
