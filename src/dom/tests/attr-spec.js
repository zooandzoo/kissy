/**
 * test cases for attribute sub module of dom module
 * @author:yiminghe@gmail.com
 */
KISSY.use("dom", function(S, DOM) {

    S.get = DOM.get;
    S.query = DOM.query;

    function trimCssText(str) {
        return str.replace(/;|\s/g, "").toLowerCase();
    }

    describe("attr", function() {
        beforeEach(function() {
            this.addMatchers({
                    toBeAlmostEqual: function(expected) {
                        return Math.abs(parseInt(this.actual) - parseInt(expected)) < 20;
                    },


                    toBeEqual: function(expected) {
                        return Math.abs(parseInt(this.actual) - parseInt(expected)) < 5;
                    },

                    toBeArrayEq:function(expected) {
                        var actual = this.actual;
                        if (expected.length != actual.length) return false;
                        for (var i = 0; i < expected.length; i++) {
                            if (expected[i] != actual[i]) return false;
                        }
                        return true;
                    }
                });
        });

        S.get = DOM.get;
        S.query = DOM.query;

        var foo = S.get('#foo'),
            a = S.get('#foo a'),
            img = S.get('#test-img'),
            input = S.get('#foo input'),
            radio = S.get('#test-radio'),
            radio2 = S.get('#test-radio2'),
            button = S.get('#foo button'),
            label = S.get('#foo label'),
            table = S.get('#test-table'),
            td = S.get('#test-table td'),
            select = S.get('#test-select'),
            select2 = S.get('#test-select2'),
            select3 = S.get('#test-select3'),
            opt = S.get('#test-opt'),
            div = S.get('#test-div'),
            opt2 = S.query('#test-select option')[1],
            area = S.get('#foo textarea'),
            disabledTest = S.get("#test-20100728-disabled");

        describe("getter/setter", function() {

            // kissy 里，对不存在的属性，统一返回 null
            it("should return null when get no-exist attribute", function() {
                expect(DOM.attr("a", "no-exist")).toBe(null)
            });

            it("should return correctly for readonly, checked, selected", function() {

                expect(DOM.attr(input, "readonly")).toBe(true);
                expect(DOM.attr(radio, 'checked')).toBe(false);
                expect(DOM.attr(input, 'value')).toBe('hello');
            });

            it("should return style correctly", function() {
                expect(S.isString(DOM.attr(a, "style"))).toBe(true);
            });

            it("should return selected correctly", function() {
                expect(DOM.attr(opt, "selected")).toBe(true);
            });


            it('shoudl get cutom attribute correctly', function() {
                // 对于非 mapping 属性：
                // ie 下可以用 a.name 或 a['name'] 获取，其它浏览器下不能，即便有值也返回 undefined
                //alert(a['data-test']);
                //alert(a.getAttribute('data-test'));
                expect(DOM.attr(a, 'data-test')).toBe('test');
            });

            // ie bugs fix:
            it("should handle class and for correctly for ie7-", function() {
                // ie7- 要用 className
                expect(DOM.attr(label, 'class')).toBe('test');
                // ie7- 要用 htmlFor
                expect(DOM.attr(label, 'for')).toBe('test-input');
            });

            it("should get href/src/rowspan correctly", function() {
                // href - http://www.glennjones.net/Post/809/getAttributehrefbug.htm
                //alert(a.href); // 在所有浏览器下，a.href 和 a['href'] 都返回绝对地址
                //alert(a.getAttribute('href')); // ie7- 下，会返回绝对地址
                expect(DOM.attr(a, 'href')).toBe('../kissy/');
                expect(DOM.attr(img, 'src')).toBe('../../../docs/assets/logo.png');

                // colspan / rowspan:
                expect(DOM.attr(td, 'rowspan') + "").toBe('2');
            });

            it("should get normal attribute correctly", function() {
                expect(DOM.attr(a, 'title')).toBe('test');
            });

            it("should set normal attribute correctly", function() {
                DOM.attr(a, 'data-set', 'test-xx');
                expect(DOM.attr(a, 'data-set')).toBe('test-xx');
            });

            it("should set style correctly", function() {
                // style
                DOM.attr(td, 'style', 'color:red;');
                expect(trimCssText(DOM.attr(td, 'style'))).toBe('color:red');
            });


            it("should batch execute correctly", function() {
                // batch 测试：
                expect(DOM.attr('input', 'id')).toBe('hidepass');
                DOM.attr('#test-data div', 'data-test', 'test');
                DOM.query("#test-data div").each(function(el) {
                    expect(DOM.attr(el, "data-test")).toBe("test");
                });
                DOM.attr([td], 'style', 'color:green;');
                expect(trimCssText(DOM.attr([td], 'style')))
                    .toBe('color:green');
            });

            it("should handle checked attribute correctly", function() {
                // 测试 checked 的 setter
                var checkbox2 = S.get('#test-20100728-checkbox');

                DOM.attr(checkbox2, 'checked', true);
                expect(DOM.attr(checkbox2, 'checked')).toBe(true);
                DOM.removeAttr(checkbox2, 'checked');
                expect(DOM.attr(checkbox2, 'checked')).toBe(false);
                expect(DOM.hasAttr(checkbox2, "checked")).toBe(false);
            });


            it("should handle disabled correctly", function() {

                expect(DOM.attr(disabledTest, "disabled")).not.toBe(true);

                DOM.attr(disabledTest, "disabled", true);

                expect(DOM.attr(disabledTest, "disabled")).toBe(true);

                DOM.attr(disabledTest, "disabled", false);

                expect(DOM.attr(disabledTest, "disabled")).not.toBe(true);
            });
        });


        describe("remove", function() {
            it("should remove attribute correctly", function() {

                // normal
                DOM.attr(label, 'test-remove', 'xx');
                expect(DOM.attr(label, 'test-remove')).toBe('xx');
                DOM.removeAttr(label, 'test-remove');
                expect(DOM.attr(label, 'test-remove')).toBe(null);

                // style
                DOM.removeAttr(a, 'style');
                expect(DOM.attr(a, "style")).toBe("");

            });
        });


        describe("val", function() {

            it("should works for input", function() {
                // normal
                expect(DOM.val(input)).toBe('hello');
            });

            it("should works for input", function() {
                // area
                expect(DOM.val(area).length).toBe(25);
            });

            it("should works for options", function() {
                // option
                expect(DOM.val(opt)).toBe('1');
                expect(DOM.val(opt2)).toBe('2');
            });

            it("should works for select", function() {
                // select
                expect(DOM.val(select)).toBe('1');
                expect(DOM.val(select2)).toBe('2');
                expect(DOM.val(select3)).toBeArrayEq(['1','2']);
            });

            it("should works for radio", function() {
                // radio
                expect(DOM.val(radio)).toBe("on");
                expect(DOM.val(radio2)).toBe("on");
            });

            it("should set value correctly", function() {
                // set value
                DOM.val(a, 'test');
                expect(DOM.val(a)).toBe('test');
                DOM.removeAttr(a, 'value');
            });

            it("should set select value correctly", function() {
                // select set value
                DOM.val(select, '3');
                expect(DOM.val(select)).toBe('3');
                // restore
                DOM.val(select, 0);
                DOM.val(select3, ['2','3']);
                expect(DOM.val(select3)).toBeArrayEq(['2','3']);

                //restore
                DOM.val(select3, ['1','2']);
                DOM.val(select, '1');
            });

        });


        describe("text", function() {
            it("should set text correctly", function() {
                DOM.text(div, 'hello, are you ok?');
                expect(DOM.text(div)).toBe('hello, are you ok?');
            });
        });


        describe("tabindex", function() {
            it("should handle tabindex correctly", function() {
                DOM.removeAttr(select, "tabindex");
                expect(DOM.hasAttr(select, "tabindex")).toBe(false);
                DOM.attr(select, 'tabindex', 1);
                expect(DOM.attr(select, "tabindex")).toBe(1);
                expect(DOM.hasAttr(select, "tabindex")).toBe(true);
                DOM.removeAttr(select, "tabindex");
                //debugger
                expect(DOM.hasAttr(select, "tabindex")).toBe(false);
            });
        });

        runs(function() {
            //S.get('#test-data').innerHTML = '';
        });
    });


});