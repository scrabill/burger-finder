fourSq.localquerydetail.desktop.LocalQueryDetailPage=function(a,b){};
fourSq.localquerydetail.desktop.LocalQueryDetailPage=fourSq.views.Page.extend({initialize:function(a){fourSq.localquerydetail.desktop.LocalQueryDetailPage.__super__.initialize.call(this,a);this.setupSignupCTA_();this.loggingHelper_=null;this.setupClickLogging_();this.facebookShareButton=new fourSq.ui.share.FacebookShareButton({el:this.$el.find(".facebook-share-button")});this.twitterTweetButton=new fourSq.ui.share.TwitterTweetButton({el:this.$el.find(".twitter-tweet-button")})},setupSignupCTA_:function(){if(!fourSq.api.models.companion.user.UserUtil.isLoggedIn()){var a=
this.$el.find(".cta");this.signupPrompt_=fourSq.signup.signupPromptFactory({el:a,signupModal:!0});fourSq.isDefinedAndNotNull(this.signupPrompt_)&&this.signupPrompt_.render()}},setupClickLogging_:function(){this.loggingHelper_=new fourSq.localquerydetail.common.LoggingHelper({el:this.el});this.loggingHelper_.setupVenueLinkClickLogging();this.loggingHelper_.setupPivotLinkClickLogging();fourSq.api.models.companion.user.UserUtil.isLoggedIn()&&this.loggingHelper_.setupAddTastesLinkClickLogging()},pageViewName:function(){return fourSq.stats.action.View.LOCAL_QUERY_DETAIL}});fourSq.localquerydetail.common.LoggingHelper=function(a,b){};
fourSq.localquerydetail.common.LoggingHelper=fourSq.ui.View.extend({setupVenueLinkClickLogging:function(){var a=this.$el.find(".listing.venue").toArray(),b=a.length;_.each(a,fourSq.bind(function(a,d){var e=$(a),f=e.attr("venueid"),e=e.find(".venueLink"),g={section:fourSq.stats.action.Section.VENUES,component:fourSq.stats.action.Component.VENUE,element:fourSq.stats.action.Element.VENUE_NAME,ids:fourSq.stats.Oids.build({venueId:f}),componentIndex:d,details:{venueCount:b}};fourSq.stats.Util.logActionOnLinkClick(e,
function(){return fourSq.stats.Action.build(fourSq.stats.action.Action.CLICK,g)})},this))},setupPivotLinkClickLogging:function(){var a=this.$el.find(".listing .pivot").toArray();_.each(a,fourSq.bind(function(a,c){var d=$(a),e=d.attr("href"),f={section:fourSq.stats.action.Section.LOCAL_QUERY_DETAIL_PIVOTS,component:fourSq.stats.action.Component.LOCAL_QUERY_DETAIL_LINK,componentIndex:c,details:{href:e}};fourSq.stats.Util.logActionOnLinkClick(d,function(){return fourSq.stats.Action.build(fourSq.stats.action.Action.CLICK,
f)})},this))},setupAddTastesLinkClickLogging:function(){var a=this.$el.find(".listing.cta .tasteLink").toArray();_.each(a,fourSq.bind(function(a,c){var d=$(a),e={section:fourSq.stats.action.Section.LISTING_INLINE_CTA,element:fourSq.stats.action.Element.TASTES_LINK};fourSq.stats.Util.logActionOnLinkClick(d,function(){return fourSq.stats.Action.build(fourSq.stats.action.Action.CLICK,e)})},this))}});