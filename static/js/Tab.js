	function Tab(node){
			var fn_this=this;
			this.oDiv=document.getElementById(node),//obj
			this.aBtn=this.oDiv.getElementsByTagName("button"),//obj arr
			this.aDiv=this.oDiv.getElementsByTagName("div");

			for(var i=0;i<this.aBtn.length;i++){
				this.aBtn[i].index=i;
				this.aBtn[i].onclick=function(){
					// 这个事件属于谁,this就指向谁(this在事件里面的时候,他就变了)
					// console.log(fn_this);
					fn_this.ck(this);
					// console.log(this);<button>节点对象<button>
				}
			}
		}
		Tab.prototype.ck=function(oBtn){
			// console.log(oBtn);
			// console.log(this);
			for(var i=0;i<this.aBtn.length;i++){
				this.aBtn[i].className="";
				this.aDiv[i].style.display="none";
			}
			oBtn.className="active";
			this.aDiv[oBtn.index].style.display="block";
		}