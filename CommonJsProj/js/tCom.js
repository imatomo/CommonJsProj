(function(global){	//全体開始

var	ComUtil,
	StrUtil,
	NumUtil,
	DateUtil,
	BigDecimal,

//----------------------------------------------------------
// ComUtilオブジェクト定義
//----------------------------------------------------------//
ComUtil = (function(){
	var extend = function(dest, source){
		var prop;
		for (prop in source){
			dest[prop] = source[prop];
		}
	};


	var indexOf = function(array, searchElement, fromIndex){
		var	i = fromIndex ? fromIndex : 0,
			l = array.length;
		for (; i < l; i++){
			if (array[i] === searchElement){
				return i;
			}
		}
		return -1;
	};

	var objIndexOf = function(array, prop, condition, fromIndex){
		var	i = fromIndex ? fromIndex : 0,
			l = array.length;
		if ('function' === typeof condition){
			for (; i < l; i++){
				if (condition(array[i][prop])){
					return i;
				}
			}
		} else {
			for (; i < l; i++){
				if (array[i][prop] === condition){
					return i;
				}
			}
		}
		return -1;
	};

	var extract = function(array, condition, prop){

	};


	return {
		extend: extend,
		indexOf: indexOf,
		objIndexOf: objIndexOf,

	};
})();	//ComUtil終了

//----------------------------------------------------------
// StrUtilオブジェクト定義
//----------------------------------------------------------//
StrUtil = (function(){
	var h2fAscii = function(str){
	};

	return {
		h2fAscii: h2fAscii
	};
})();	//StrUtil終了

//----------------------------------------------------------
// NumUtilオブジェクト定義
//----------------------------------------------------------//
NumUtil = (function(){
	return {};
})();	//NumUtil終了

//----------------------------------------------------------
// DateUtilオブジェクト定義
//----------------------------------------------------------//
DateUtil = (function(){
	return {};
})();	//DateUtil終了

//----------------------------------------------------------
// BigDecimal クラス定義
//----------------------------------------------------------//
(function(){
var _parceBigDecimal = function(obj){
	if (!obj){
		return obj;
	}


};


var add = function(augend){
};

var subtract = function(subtrahend){
};

var multiply = function(multiplicand){
};

var divide = function(divisor){
};

var max = function(val){
};

var min = function(val){
};

var parseNum = function(){
};

//コンストラクタ
BigDecimal = function(data){
	this.value = 0;
	this.scale = 0;

	var type = typeof data;
	if (type == 'string'){
		var expr = data.match(/([+-]?)(\d*)(\.?)(\d*)([eE][+-]?\d+|)/);

	} else if (type == 'number'){

	}
};

//プロトタイプ
BigDecimal.prototype = {
	add: add,
	subtract: subtract,
	multiply: multiply,
	divide: divide,
	max: max,
	min: min,
	parseNum: parseNum
};

//staticメソッド追加
ComUtil.extend(BigDecimal, {
	test: function(){
		alert('testOK');
	}
});


})();	//BigDecimal終了

//----------------------------------------------------------
// グローバル変数にセット（名前衝突時は、ここを編集）
//----------------------------------------------------------//
global.tCom = {
	ComUtil: ComUtil,
	StrUtil: StrUtil,
	NumUtil: NumUtil,
	DateUtil: DateUtil,
	BigDecimal: BigDecimal
};

//シンタックスシュガー
global.ComUtil = ComUtil;
global.StrUtil = StrUtil;
global.NumUtil = NumUtil;
global.DateUtil = DateUtil;
global.BigDecimal = BigDecimal;

})(this);	//全体終了



