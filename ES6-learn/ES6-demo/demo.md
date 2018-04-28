## quality router.js

`
	{
      path: '/quality/qlist',
      models: () => [import('./models/quality')],
      component: () => import('./routes/quality/list'),
    }, {
      path: '/quality/qitem',
      models: () => [import('./models/quality')],
      component: () => import('./routes/quality/item'),
    }
`

## quality services

`
	import {request} from '../utils'

	export async function queryL(params) {
	  return request({
	    url: '/qc/list',
	    method: 'get',
	    data: params
	  })
	}

	export async function queryA(params) {
	  return request({
	    url: '/qc/all',
	    method: 'get',
	    data: params
	  })
	}

	export async function updateL(params) {
	  return request({
	    url: '/qc/lpost',
	    method: 'post',
	    data: params
	  })
	}

	export async function createL(params) {
	  return request({
	    url: '/qc/lpost',
	    method: 'post',
	    data: params
	  })
	}

	export async function queryI(params) {
	  return request({
	    url: '/qc/item',
	    method: 'get',
	    data: params
	  })
	}

	export async function updateI(params) {
	  return request({
	    url: '/qc/ipost',
	    method: 'post',
	    data: params
	  })
	}

	export async function createI(params) {
	  return request({
	    url: '/qc/ipost',
	    method: 'post',
	    data: params
	  })
	}

	export async function deleteI(params) {
	  return request({
	    url: '/qc/idel',
	    method: 'post',
	    data: params
	  })
	}

	export async function deleteL(params) {
	  return request({
	    url: '/qc/ldel',
	    method: 'post',
	    data: params
	  })
	}

`

## quality routes item  filter.js

`
	import React from 'react'
	import PropTypes from 'prop-types'
	import {Button, Col, Form, Input, Row} from 'antd'

	const Search = Input.Search;
	const ColProps = {
	  xs: 24,
	  sm: 12,
	  style: {
	    marginBottom: 16,
	  },
	};

	const TwoColProps = {
	  ...ColProps,
	  xl: 96,
	};

	const Filter = ({
	                  onAdd,
	                  onFilterChange,
	                  filter,
	                  form: {
	                    getFieldDecorator,
	                    getFieldsValue
	                  },
	                }) => {
	  const handleSubmit = () => {
	    let fields = getFieldsValue();
	    onFilterChange(fields)
	  };
	  const {category} = filter;
	  return (
	    <Row gutter={24}>
	      <Col {...ColProps} xl={{span: 4}} md={{span: 8}}>
	        {getFieldDecorator('category', {initialValue: category})(<Search placeholder="输入服装类型"
	                                                                         size="large"
	                                                                         onSearch={handleSubmit}/>)}
	      </Col>
	      <Col lg={{offset: 12, span: 8}} md={12} sm={8} xs={24} style={{marginBottom: 16, textAlign: 'right'}}>
	        <Button size="large" type="ghost" onClick={onAdd}>新增</Button>
	      </Col>
	    </Row>
	  )
	};

	Filter.propTypes = {
	  onAdd: PropTypes.func,
	  form: PropTypes.object,
	  filter: PropTypes.object,
	  onFilterChange: PropTypes.func,
	};

	export default Form.create()(Filter)
	
`

## quality routes item index.js

`
	import React from 'react'
	import PropTypes from 'prop-types'
	import {routerRedux} from 'dva/router'
	import {connect} from 'dva'
	import List from './list'
	import Filter from './filter'
	import Modal from './modal2'
	import {Page} from "../../../components";

	const CheckList = ({location, dispatch, quality, loading}) => {
	  const {item, pagination, currentItem, modalVisible, itemModalType, list} = quality;

	  const {pageSize} = pagination;
	  const modalProps = {
	    item: itemModalType === 'createItem' ? {} : currentItem,
	    visible: modalVisible,
	    maskClosable: true,
	    confirmLoading: loading.effects['quality/updateItem'],
	    title: `${itemModalType === 'createItem' ? '新增质检条目' : '修改质检条目'}`,
	    wrapClassName: 'vertical-center-modal',
	    onOk(data) {
	      dispatch({
	        type: `quality/${itemModalType}`,
	        payload: data,
	      })
	    },
	    onCancel() {
	      dispatch({
	        type: 'quality/hideModal',
	      })
	    },
	    categoryList: list
	  };

	  const listProps = {
	    dataSource: item,
	    loading: loading.effects['quality/queryItem'],
	    pagination,
	    location,
	    onChange(page) {
	      const {query, pathname} = location;
	      dispatch(routerRedux.push({
	        pathname,
	        query: {
	          ...query,
	          page: page.current,
	          pageSize: page.pageSize,
	        },
	      }))
	    },
	    onDeleteItem(id) { //todo 删除操作
	      dispatch({
	        type: 'quality/deleteItem',
	        payload: id,
	      })
	    },
	    onEditItem(item) {
	      dispatch({
	        type: 'quality/showModal',
	        payload: {
	          itemModalType: 'updateItem',
	          currentItem: item,
	        },
	      })
	    }
	  };

	  const filterProps = {
	    filter: {
	      ...location.query,
	    },
	    onFilterChange(value) {
	      dispatch(routerRedux.push({
	        pathname: location.pathname,
	        query: {
	          ...value,
	          page: 1,
	          pageSize,
	        },
	      }))
	    },
	    onSearch(fieldsValue) {
	      fieldsValue.keyword.length ? dispatch(routerRedux.push({
	        pathname: '/quality/qitem',
	        query: {
	          field: fieldsValue.field,
	          keyword: fieldsValue.keyword,
	        },
	      })) : dispatch(routerRedux.push({
	        pathname: '/quality/qitem',
	      }))
	    },
	    onAdd() {
	      dispatch({
	        type: 'quality/showModal',
	        payload: {
	          itemModalType: 'createItem',
	        },
	      })
	    }
	  };

	  return (
	    <Page inner>
	      <Filter {...filterProps} />
	      <List {...listProps} />
	      {modalVisible && <Modal {...modalProps} />}
	    </Page>
	  )
	}

	CheckList.propTypes = {
	  user: PropTypes.object,
	  location: PropTypes.object,
	  dispatch: PropTypes.func,
	  loading: PropTypes.object,
	}

	export default connect(({quality, loading}) => ({quality, loading}))(CheckList)

`

## quality routes item list.js

`
	import {Modal, Table, Tag, Popconfirm, Avatar} from "antd";
	import React from "react";
	import PropTypes from 'prop-types'
	import styles from "../../app.less";
	import classnames from 'classnames'
	import pinyin from 'tiny-pinyin';
	import Mock from 'mockjs';

	const confirm = Modal.confirm;

	function List({dataSource, loading, pagination, onPageChange, onEditItem, onDeleteItem, location}) {
	  const handleClick = (record, type) => {
	    switch (type) {
	      case 'edit':
	        onEditItem(record);
	        break;
	      case 'del':
	        onDeleteItem(record._id)
	        break;
	      default:
	        break;
	    }
	  }
	  let ctext = '确定要删除这条记录吗?';
	  const columns = [
	    {
	      title: 'Avatar',
	      dataIndex: 'avatar',
	      key: 'avatar',
	      className: styles.avatar,
	      render: (text, record) => {
	        let color = Mock.Random.color().substr(1);
	        const url = 'https://dummyimage.com/100x100/' + color + '/fff.png&text=';
	        return <Avatar src={url + pinyin.convertToPinyin(record.category).substr(0, 1)}/>
	      }
	    },
	    {
	      title: '类型',
	      dataIndex: 'category',
	      key: 'Category',
	    },
	    {
	      title: '质检条目详细信息',
	      dataIndex: 'parts',
	      key: 'tags',
	      render: text => {
	        let preColor = ['pink', 'red', 'orange', 'green', 'cyan', 'blue', 'purple', 'yellow'];
	        return text.map(d => {
	          const color = preColor[Math.floor(Math.random() * preColor.length)];
	          return <Tag key={d.name} color={color} style={{marginBottom: 3}}>{d.name}:{d.value}cm</Tag>
	        })
	      }
	    },
	    {
	      title: '二维码',
	      dataIndex: 'qrcode',
	      key: 'qrcode',
	      render: (text, record) => <img src={'//www.npclo.com/qrcode/' + record._id + '?size=200'}
	                                     style={{width: 100, height: 100, borderRadius: 0}}/>
	    },
	    {
	      title: '操作',
	      key: 'action',
	      render: (text, record) => <div>
	        <a onClick={() => handleClick(record, 'edit')} style={{marginRight: 20}}>编辑</a>
	        <Popconfirm placement="topLeft" title={ctext} onConfirm={() => handleClick(record, 'del')} okText="是的"
	                    cancelText="否" style={{marginRight: 10}}>
	          <a>删除</a>
	        </Popconfirm>
	      </div>
	    }];

	  return (
	    <div>
	      <Table
	        dataSource={dataSource}
	        className={classnames({[styles.table]: true})}
	        columns={columns}
	        loading={loading}
	        onChange={onPageChange}
	        pagination={pagination}
	        size={"default"}
	        rowKey={record => record._id}
	      />
	    </div>
	  )
	}

	List.propTypes = {
	  loading: PropTypes.bool,
	  dataSource: PropTypes.array,
	  onPageChange: PropTypes.func,
	  pagination: PropTypes.object,
	  onEditItem: PropTypes.func,
	  onDeleteItem: PropTypes.func
	};

	export default List;

`

## quality routes item modal.js

`
	import React from 'react'
	import PropTypes from 'prop-types'
	import {Form, Input, Modal, Select} from 'antd'
	import pinyin from 'tiny-pinyin';

	const FormItem = Form.Item;
	const formItemLayout = {
	  labelCol: {
	    span: 6,
	  },
	  wrapperCol: {
	    span: 14,
	  },
	};

	const modal = ({
	                 item = {},
	                 onOk,
	                 form: {
	                   getFieldDecorator,
	                   validateFields,
	                   getFieldsValue,
	                   setFieldsValue,
	                 },
	                 ...modalProps, categoryList
	               }) => {

	  const handleOk = () => {
	    validateFields(e => {
	      if (e) {
	        return
	      }
	      const data = {
	        ...getFieldsValue(),
	        key: item.key,
	      };
	      onOk(data)
	    })
	  };

	  const modalOpts = {
	    ...modalProps,
	    onOk: handleOk,
	  };
	  const categoryListOptionList = categoryList.map(item => < Select.Option key={item._id}
	                                                                          value={item.category}>{item.category}</ Select.Option>);

	  let formItems;

	  function categoryListHandleChange(value) {
	    setFieldsValue({
	      tags: value
	    });
	    categoryList.forEach((v, k) => {
	      if (v.category === value) {
	        formItems = v.parts.map((k, index) => {
	          return (
	            <FormItem
	              {...formItemLayout}
	              label={k}
	              required={true}
	              key={k}
	            >
	              {getFieldDecorator(pinyin.convertToPinyin(`${k}`), {
	                validateTrigger: ['onChange', 'onBlur'],
	                rules: [{
	                  required: true,
	                  whitespace: true,
	                  message: "请录入该部位信息",
	                }],
	              })(
	                <Input placeholder="录入该部位的数值" style={{width: '60%', marginRight: 8}}/>
	              )}
	            </FormItem>)
	        });
	      }
	    });
	  }

	  return (
	    <Modal {...modalOpts}>
	      <Form layout="horizontal">
	        <FormItem label="类型" hasFeedback {...formItemLayout}>
	          {getFieldDecorator('category', {
	            initialValue: item.category,
	            rules: [{message: '请选择一个类型', type: 'string', required: true}]
	          })(<Select
	            placeholder="请选择一个类型"
	            dropdownMenuStyle={{maxHeight: 200, overflow: 'auto'}}
	            onChange={categoryListHandleChange}
	          >
	            {categoryListOptionList}
	          </Select>)}
	        </FormItem>
	      </Form>
	    </Modal>
	  )
	};

	modal.propTypes = {
	  form: PropTypes.object.isRequired,
	  type: PropTypes.string,
	  item: PropTypes.object,
	  onOk: PropTypes.func,
	};

	export default Form.create()(modal)

`

## quality routes item modal2.js

`
	import React from 'react'
	import PropTypes from 'prop-types'
	import {Form, Input, Modal, Select} from 'antd'

	const FormItem = Form.Item;

	class DynamicModal extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      keys: this.props.item.parts || []
	    }
	  }

	  render() {

	    const {maskClosable, visible, title, wrapClassName, onOk, item, categoryList, form, onCancel} = this.props;
	    //Modal属性
	    let modalProps = {
	      maskClosable: maskClosable,
	      visible: visible,
	      title: title,
	      wrapClassName: wrapClassName
	    };
	    const {getFieldDecorator, getFieldValue, validateFields, getFieldsValue, setFieldsValue} = form;
	    //下拉变化触发
	    const categoryListHandleChange = (value) => {
	      setFieldsValue({
	        tags: value
	      });
	      // todo
	      categoryList.forEach((v, k) => {
	        if (v.category === value) {
	          this.state.keys = v.parts;
	        }
	      });
	    };
	    //保存
	    const handleOk = () => {
	      validateFields((errors) => {
	        if (errors) {
	          return
	        }
	        const data = {
	          ...getFieldsValue(),
	          key: item.key,
	        };
	        onOk(data)
	      })
	    };
	    //布局相关
	    const formItemLayout = {
	      labelCol: {
	        xs: {span: 24},
	        sm: {span: 4},
	      },
	      wrapperCol: {
	        xs: {span: 24},
	        sm: {span: 20},
	      },
	    };
	    //modal属性
	    const modalOpts = {
	      ...modalProps,
	      onOk: handleOk,
	      width: 360,
	      onCancel: onCancel
	    };
	    //类型下拉列表
	    const categoryListOptionList = categoryList.map(item => < Select.Option
	      key={item._id}
	      value={item.category}>{item.category}</ Select.Option>);
	    //渲染结果
	    let disabled = {};
	    if (!item) {
	      disabled = {
	        disabled: true
	      }
	    }
	    return (
	      <Modal {...modalOpts}>
	        <Form layout="horizontal">
	          <FormItem label="类型" hasFeedback {...formItemLayout}>
	            {getFieldDecorator('category', {
	              initialValue: item.category,
	              rules: [{message: '请选择一个类型', type: 'string', required: true}]
	            })(<Select
	              {...disabled}
	              placeholder="请选择一个类型"
	              dropdownMenuStyle={{maxHeight: 200, overflow: 'auto'}}
	              onChange={categoryListHandleChange}
	            >
	              {categoryListOptionList}
	            </Select>)}
	          </FormItem>
	          {this.state.keys.map((k, index) => {
	            let name = k.name ? k.name : k;
	            let value = k.value ? k.value : '';
	            return (
	              <FormItem
	                {...formItemLayout}
	                label={name}
	                required={true}
	                key={name}
	                hasFeedback
	              >
	                {getFieldDecorator('parts[' + name + ']', {
	                  validateTrigger: ['onChange', 'onBlur'],
	                  initialValue: value,
	                  rules: [{
	                    required: true,
	                    whitespace: true,
	                    message: "请输入一个数值",
	                  }],
	                })(
	                  <Input placeholder="输入该部位的数值"/>
	                )}
	              </FormItem>
	            );
	          })}
	        </Form>
	      </Modal>
	    );
	  }
	}

	DynamicModal.propTypes = {
	  form: PropTypes.object.isRequired,
	  type: PropTypes.string,
	  item: PropTypes.object,
	  onOk: PropTypes.func,
	  categoryList: PropTypes.array
	};

	export default Form.create()(DynamicModal);

`

## quality routes list filter.js

`
	import React from 'react'
	import PropTypes from 'prop-types'
	import {Button, Col, Form, Input, Row} from 'antd'

	const Search = Input.Search;
	const ColProps = {
	  xs: 24,
	  sm: 12,
	  style: {
	    marginBottom: 16,
	  },
	};

	const TwoColProps = {
	  ...ColProps,
	  xl: 96,
	};

	const Filter = ({
	                  onAdd,
	                  onFilterChange,
	                  filter,
	                  form: {
	                    getFieldDecorator,
	                    getFieldsValue
	                  },
	                }) => {
	  const handleSubmit = () => {
	    let fields = getFieldsValue();
	    onFilterChange(fields)
	  };
	  const {category} = filter;
	  return (
	    <Row gutter={24}>
	      <Col {...ColProps} xl={{span: 4}} md={{span: 8}}>
	        {getFieldDecorator('category', {initialValue: category})(<Search placeholder="输入服装类型"
	                                                                         size="large"
	                                                                         onSearch={handleSubmit}/>)}
	      </Col>
	      <Col lg={{offset: 12, span: 8}} md={12} sm={8} xs={24} style={{marginBottom: 16, textAlign: 'right'}}>
	        <Button size="large" type="ghost" onClick={onAdd}>新增</Button>
	      </Col>
	    </Row>
	  )
	};

	Filter.propTypes = {
	  onAdd: PropTypes.func,
	  form: PropTypes.object,
	  filter: PropTypes.object,
	  onFilterChange: PropTypes.func,
	};

	export default Form.create()(Filter)

`

## quality routes list index.js

`
	import React from 'react'
	import PropTypes from 'prop-types'
	import {routerRedux} from 'dva/router'
	import {connect} from 'dva'
	import List from './list'
	import Filter from './filter'
	import Modal from './modal'
	import {Page} from "../../../components";

	const CheckList = ({location, dispatch, quality, loading}) => {
	  const {list, pagination, currentItem, modalVisible, modalType} = quality;
	  const {pageSize} = pagination;
	  const modalProps = {
	    item: modalType === 'createList' ? {} : currentItem,
	    visible: modalVisible,
	    maskClosable: true,
	    confirmLoading: loading.effects['quality/updateList'],
	    title: `${modalType === 'createList' ? '新增质检类型' : '修改质检类型'}`,
	    wrapClassName: 'vertical-center-modal',
	    onOk(data) {
	      dispatch({
	        type: `quality/${modalType}`,
	        payload: data,
	      })
	    },
	    onCancel() {
	      dispatch({
	        type: 'quality/hideModal',
	      })
	    },
	  }

	  const listProps = {
	    dataSource: list,
	    loading: loading.effects['quality/queryList'],
	    pagination,
	    location,
	    onChange(page) {
	      const {query, pathname} = location;
	      dispatch(routerRedux.push({
	        pathname,
	        query: {
	          ...query,
	          page: page.current,
	          pageSize: page.pageSize,
	        },
	      }))
	    },
	    onDeleteItem(id) { //删除操作
	      dispatch({
	        type: 'quality/deleteList',
	        payload: id,
	      })
	    },
	    onEditItem(item) {
	      dispatch({
	        type: 'quality/showModal',
	        payload: {
	          modalType: 'updateList',
	          currentItem: item,
	        },
	      })
	    }
	  };

	  const filterProps = {
	    filter: {
	      ...location.query,
	    },
	    onFilterChange(value) {
	      dispatch(routerRedux.push({
	        pathname: location.pathname,
	        query: {
	          ...value,
	          page: 1,
	          pageSize,
	        },
	      }))
	    },
	    onSearch(fieldsValue) {
	      fieldsValue.keyword.length ? dispatch(routerRedux.push({
	        pathname: '/quality/qlist',
	        query: {
	          field: fieldsValue.field,
	          keyword: fieldsValue.keyword,
	        },
	      })) : dispatch(routerRedux.push({
	        pathname: '/quality/qlist',
	      }))
	    },
	    onAdd() {
	      dispatch({
	        type: 'quality/showModal',
	        payload: {
	          modalType: 'createList',
	        },
	      })
	    }
	  };

	  return (
	    <Page inner>
	      <Filter {...filterProps} />
	      <List {...listProps} />
	      {modalVisible && <Modal {...modalProps} />}
	    </Page>
	  )
	}

	CheckList.propTypes = {
	  user: PropTypes.object,
	  location: PropTypes.object,
	  dispatch: PropTypes.func,
	  loading: PropTypes.object,
	}

	export default connect(({quality, loading}) => ({quality, loading}))(CheckList)

`

## quality routes list list.js

`
	import {Avatar, Modal, Popconfirm, Table, Tag} from "antd";
	import React from "react";
	import PropTypes from 'prop-types'
	import styles from "../../app.less";
	import classnames from 'classnames'
	import pinyin from 'tiny-pinyin';
	import Mock from 'mockjs';

	const confirm = Modal.confirm;

	function List({dataSource, loading, pagination, onPageChange, onEditItem, location, onDeleteItem}) {
	  const handleClick = (record, type) => {
	    switch (type) {
	      case 'edit':
	        onEditItem(record);
	        break;
	      case 'del':
	        onDeleteItem(record._id);
	        break;
	      default:
	        break;
	    }
	  }
	  let ctext = '确定要删除这条记录吗?';
	  const columns = [
	    {
	      title: 'Avatar',
	      dataIndex: 'avatar',
	      key: 'avatar',
	      className: styles.avatar,
	      render: (text, record) => {
	        let color = Mock.Random.color().substr(1);
	        const url = 'https://dummyimage.com/100x100/' + color + '/fff.png&text=';
	        return <Avatar src={url + pinyin.convertToPinyin(record.category).substr(0, 1).toUpperCase()}/>
	      }
	    },
	    {
	      title: '类型',
	      dataIndex: 'category',
	      key: 'Category',
	    },
	    {
	      title: '质检部位',
	      dataIndex: 'part',
	      key: 'tags',
	      render: (text, record) => {
	        let preColor = ['pink', 'red', 'orange', 'green', 'cyan', 'blue', 'purple', 'yellow'];
	        return record.parts.map(d => {
	          const color = preColor[Math.floor(Math.random() * preColor.length)];
	          return <Tag key={d} color={color} style={{marginBottom: 3}}>{d}</Tag>
	        })
	      }
	    },
	    {
	      title: '操作',
	      key: 'action',
	      render: (text, record) => <div>
	        <a onClick={() => handleClick(record, 'edit')} style={{marginRight: 20}}>编辑</a>
	        <Popconfirm placement="topLeft" title={ctext} onConfirm={() => handleClick(record, 'del')} okText="是的"
	                    cancelText="否" style={{marginRight: 10}}>
	          <a>删除</a>
	        </Popconfirm>
	      </div>
	    }];

	  return (
	    <div>
	      <Table
	        dataSource={dataSource}
	        className={classnames({[styles.table]: true})}
	        columns={columns}
	        loading={loading}
	        onChange={onPageChange}
	        pagination={pagination}
	        size={"default"}
	        rowKey={record => record._id}
	      />
	    </div>
	  )
	}

	List.propTypes = {
	  loading: PropTypes.bool,
	  dataSource: PropTypes.array,
	  onPageChange: PropTypes.func,
	  pagination: PropTypes.object,
	  onEditItem: PropTypes.func
	};

	export default List;

`

## quality routes list modal.js

`
	import React from 'react'
	import PropTypes from 'prop-types'
	import {Form, Input, Modal, Select} from 'antd'

	const FormItem = Form.Item;
	const formItemLayout = {
	  labelCol: {
	    span: 6,
	  },
	  wrapperCol: {
	    span: 14,
	  },
	};

	const modal = ({
	                 item = {},
	                 onOk,
	                 form: {
	                   getFieldDecorator,
	                   validateFields,
	                   getFieldsValue,
	                   setFieldsValue,
	                 },
	                 ...modalProps
	               }) => {
	  const handleOk = () => {
	    validateFields((errors) => {
	      if (errors) {
	        return
	      }
	      const data = {
	        ...getFieldsValue()
	      };
	      onOk(data)
	    })
	  };

	  const modalOpts = {
	    ...modalProps,
	    onOk: handleOk,
	  };

	  let partList_temp = [];
	  if (Array.isArray(item.parts) && item.parts.length > 0) {
	    partList_temp = item.parts;
	  } else {
	    partList_temp = ['暂无部位']; //array
	  }

	  const partListOptionList = partList_temp.map(d => < Select.Option key={d + Math.random()}
	                                                                    value={d}>{d}</ Select.Option>
	  );

	  function partsListHandleChange(value) {
	    setFieldsValue({
	      parts: value
	    });
	  }

	  return (
	    <Modal {...modalOpts}>
	      <Form layout="horizontal">
	        <FormItem label="类型" hasFeedback {...formItemLayout}>
	          {getFieldDecorator('category', {
	            initialValue: item.category,
	            rules: [
	              {required: true, message: '请填写类型!'},
	            ],
	          })(<Input placeholder="请输入类型" />)}
	        </FormItem>
	        <FormItem label="部位" hasFeedback {...formItemLayout} style={{marginBottom: 0}}>
	          {getFieldDecorator('parts', {
	            initialValue: item.parts,
	            rules: [{message: '请填写至少一个部位!', type: 'array', required: true}]
	          })(<Select
	            placeholder="输入或选择一个或多个部位"
	            mode="tags"
	            dropdownMenuStyle={{maxHeight: 200, overflow: 'auto'}}
	            maxTagTextLength={10}
	            onChange={partsListHandleChange}
	            tokenSeparators={[' ', ',']}
	          >
	            {partListOptionList}
	          </Select>)}
	        </FormItem>
	      </Form>
	    </Modal>
	  )
	};

	modal.propTypes = {
	  form: PropTypes.object.isRequired,
	  type: PropTypes.string,
	  item: PropTypes.object,
	  onOk: PropTypes.func,
	};

	export default Form.create()(modal)

`

## quality models quality.js

`
	import {createI, createL, deleteI, deleteL, queryA, queryI, queryL, updateI, updateL} from '../services/quality'
	import {parse} from 'qs'
	import {routerRedux} from 'dva/router';
	import {message} from 'antd'

	export default {
	  namespace: 'quality',
	  state: {
	    list: [],
	    item: [],
	    currentItem: {},
	    modalVisible: false,
	    modalType: 'createList',
	    itemModalType: 'createItem',
	    pagination: {
	      showSizeChanger: true,
	      showQuickJumper: true,
	      showTotal: total => `共 ${total} 条`,
	      current: 1,
	      total: null,
	      pageSize: null
	    },
	  },

	  subscriptions: {
	    setup({dispatch, history}) {
	      history.listen(location => {
	        let {pathname, query} = location;
	        if (pathname === '/quality/qlist') {
	          dispatch({
	            type: 'queryList',
	            payload: query,
	          })
	        }
	        if (pathname === '/quality/qitem') {
	          dispatch({
	            type: 'queryItem',
	            payload: query,
	          });
	          dispatch({
	            type: 'queryAll',
	            payload: query,
	          })
	        }
	      })
	    },
	  },

	  effects: {
	    * queryList({payload}, {call, put}) {
	      const {data, success, msg} = yield call(queryL, parse(payload));
	      if (success) {
	        yield put({
	          type: 'querySuccess',
	          payload: {
	            list: data.list,
	            pagination: data.pagination,
	          },
	        })
	      } else {
	        message.error(msg)
	      }
	    },

	    * queryAll({payload}, {call, put}) {
	      const {data, success, msg} = yield call(queryA, parse(payload));
	      if (success) {
	        yield put({
	          type: 'querySuccess',
	          payload: {
	            list: data.list
	          },
	        })
	      } else {
	        message.error(msg)
	      }
	    },

	    * queryItem({payload}, {call, put}) {
	      const {data, success, msg} = yield call(queryI, parse(payload));
	      if (success) {
	        yield put({
	          type: 'queryItemSuccess',
	          payload: {
	            item: data.item,
	            pagination: data.pagination,
	          },
	        })
	      } else {
	        message.error(msg)
	      }
	    },

	    * deleteItem({payload}, {call, put}) {
	      const {success} = yield call(deleteI, {id: payload});
	      if (success) {
	        yield put({
	          type: 'queryItem'
	        })
	      }
	    },

	    * deleteList({payload}, {call, put}) {
	      const {success} = yield call(deleteL, {id: payload});
	      if (success) {
	        yield put({
	          type: 'queryList'
	        })
	      }
	    },

	    * createList({payload}, {call, put}) {
	      const {msg, success} = yield call(createL, payload);
	      if (success) {
	        yield put({type: 'hideModal'});
	        yield put({type: 'queryList'})
	      } else {
	        message.error(msg, 2)
	      }
	    },

	    * createItem({payload}, {call, put}) {
	      const {msg, success} = yield call(createI, payload);
	      if (success) {
	        yield put({type: 'hideModal'});
	        yield put({type: 'queryItem'})
	      } else {
	        message.error(msg, 2)
	      }
	    },

	    * updateList({payload}, {select, call, put}) {
	      const id = yield select(item => item.quality.currentItem._id);
	      const newModel = {...payload, id};
	      const {msg, success} = yield call(updateL, newModel);
	      if (success) {
	        yield put({type: 'hideModal'});
	        yield put({type: 'queryList'})
	      } else {
	        message.error(msg)
	      }
	    },

	    * updateItem({payload}, {select, call, put}) {
	      const id = yield select(item => item.quality.currentItem._id);
	      const newModel = {...payload, id};
	      const {msg, success} = yield call(updateI, newModel);
	      if (success) {
	        yield put({type: 'hideModal'});
	        yield put({type: 'queryItem'})
	      } else {
	        message.error(msg, 2)
	      }
	    },

	    * reloadl({action}, {put, select}) {
	      const page = yield select(state => state.crash.pagination.current);
	      yield put({type: 'queryList', payload: {page}});
	    },
	  },

	  reducers: {
	    querySuccess(state, action) {
	      const {list, pagination} = action.payload;
	      return {
	        ...state,
	        list,
	        pagination: {
	          ...state.pagination,
	          ...pagination,
	        }
	      }
	    },

	    queryItemSuccess(state, action) {
	      const {pagination, item} = action.payload;
	      return {
	        ...state,
	        item,
	        pagination: {
	          ...state.pagination,
	          ...pagination,
	        }
	      }
	    },

	    showModal(state, {payload}) {
	      return {...state, ...payload, modalVisible: true}
	    },

	    hideModal(state) {
	      return {...state, modalVisible: false}
	    }
	  },
	}

`
