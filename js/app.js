 var Question = Backbone.Model.extend({
 	defaults : {
 		id : 0,
 		title: '',
 		desc : '',
 		time : Date(),
 		upvotes : 0
 	}
 });


 var Questions = Backbone.Collection.extend({
 	model : Question,
 	nextID : function(){
		if( !this.length){
			return 1;
		}
		return this.last().get('id') + 1;

	}
 });

var qs = new Questions();


var QuestionView = Backbone.View.extend({
 	template : _.template($("#q-template").html()),
 	events : {
 		'click .angle-up>img' : 'upvote',
 		'click .angle-down>img' : 'downvote',
 		'click .ck-open' : 'openCK'
 	},
 	initialize : function(){
 		this.listenTo(this.model,'change', this.render);
 	},
 	render : function(){
 		this.$el.html(this.template(this.model.attributes));
 		return this;
 	},
 	downvote : function(){
 		var votes = this.model.get('upvotes');
 		if(votes > 0){
 			this.model.set({'upvotes' : votes - 1});
 		}
 	},
 	upvote : function(){
 		var votes = this.model.get('upvotes');
 		this.model.set({'upvotes' : votes +  1});
 	},
 	openCK : function(){
 		this.$('.ck-editor-box').slideToggle();
 	}
 });

 var appView = Backbone.View.extend({
 	el : "#question-container",
 	initialize : function(){
 		this.listenTo(qs,'add', this.addOne);
 		this.listenTo(qs,'reset', this.addAll);
 	},
 	addOne : function(question){
 		var view = new QuestionView({ model:question });
 		$("#question-container").append(view.render().el);
 	},
 	addAll : function(){
 		$("#question-container").html('');
 		qs.each(this.addOne, this);
 	}
 });

var app = new appView();
var data1 = {
	title : "Try", desc : "Why", upvotes : 45, id : 4
};
var data2 = {title : "Try2", desc : "Poles Apart", upvotes : 5, id : 2};

qs.reset([data1, data2]);
